import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { UserRole } from "~/generated/prisma";

/**
 * 获取当前登录用户（从数据库）
 * 如果数据库中不存在该用户，则自动从 Clerk 获取信息并创建
 */
export async function getCurrentUserFromDb() {
  const { userId: clerkId } = await auth();
  if (!clerkId) return null;

  let user = await prisma.user.findUnique({
    where: { clerkId },
  });

  // 用户不存在，从 Clerk 同步创建
  if (!user) {
    user = await syncUserFromClerk(clerkId);
  }

  return user;
}

/**
 * 从 Clerk 同步用户信息到数据库
 */
async function syncUserFromClerk(clerkId: string) {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  const email = clerkUser.emailAddresses?.[0]?.emailAddress ?? null;
  const nickname =
    [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || null;
  const imageUrl = clerkUser.imageUrl ?? null;

  // 使用 upsert 防止并发创建重复用户
  const user = await prisma.user.upsert({
    where: { clerkId },
    update: {
      email,
      nickname,
      imageUrl,
    },
    create: {
      clerkId,
      email,
      nickname,
      imageUrl,
    },
  });

  return user;
}

/**
 * 检查当前用户是否为管理员
 */
export async function isAdmin() {
  const user = await getCurrentUserFromDb();
  return user?.role === UserRole.ADMIN;
}

/**
 * 要求管理员权限，否则抛出错误
 */
export async function requireAdmin() {
  const user = await getCurrentUserFromDb();
  if (!user) {
    throw new Error("UNAUTHORIZED");
  }
  if (user.role !== UserRole.ADMIN) {
    throw new Error("FORBIDDEN");
  }
  return user;
}
