import { prisma } from "@/server/prisma";
import type { Prisma } from "~/generated/prisma";

export interface ListUsersParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

export class UserService {
  /**
   * 获取用户列表（分页）
   */
  static async list({ page = 1, pageSize = 10, search }: ListUsersParams = {}) {
    const where: Prisma.UserWhereInput = search
      ? {
        OR: [
          { email: { contains: search } },
          { nickname: { contains: search } },
        ],
      }
      : {};

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
        select: {
          id: true,
          clerkId: true,
          email: true,
          nickname: true,
          imageUrl: true,
          status: true,
          role: true,
          credits: true,
          createdAt: true,
        },
      }),
      prisma.user.count({ where }),
    ]);

    return {
      items: users,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  }

  /**
   * 根据 ID 获取用户
   */
  static async getById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  /**
   * 根据 Clerk ID 获取用户
   */
  static async getByClerkId(clerkId: string) {
    return prisma.user.findUnique({
      where: { clerkId },
    });
  }
}
