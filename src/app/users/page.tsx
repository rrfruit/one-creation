import Link from "next/link";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/sign-in");
  }

  console.log(clerkUser);

  const primaryEmail =
    clerkUser.emailAddresses.find(
      (email) => email.id === clerkUser.primaryEmailAddressId,
    )?.emailAddress ?? clerkUser.emailAddresses[0]?.emailAddress;

  const primaryPhone =
    clerkUser.phoneNumbers.find(
      (phone) => phone.id === clerkUser.primaryPhoneNumberId,
    )?.phoneNumber ?? clerkUser.phoneNumbers[0]?.phoneNumber;

  const displayName =
    clerkUser.fullName ??
    [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ");

  await prisma.user.upsert({
    where: { clerkId: clerkUser.id },
    create: {
      clerkId: clerkUser.id,
      email: primaryEmail ?? null,
      name: displayName || null,
      username: clerkUser.username ?? null,
      imageUrl: clerkUser.imageUrl ?? null,
      phone: primaryPhone ?? null,
      status: "active",
      clerkCreatedAt: clerkUser.createdAt
        ? new Date(clerkUser.createdAt)
        : null,
      clerkUpdatedAt: clerkUser.updatedAt
        ? new Date(clerkUser.updatedAt)
        : null,
      lastSignInAt: clerkUser.lastSignInAt
        ? new Date(clerkUser.lastSignInAt)
        : null,
    },
    update: {
      email: primaryEmail ?? null,
      name: displayName || null,
      username: clerkUser.username ?? null,
      imageUrl: clerkUser.imageUrl ?? null,
      phone: primaryPhone ?? null,
      clerkUpdatedAt: clerkUser.updatedAt
        ? new Date(clerkUser.updatedAt)
        : null,
      lastSignInAt: clerkUser.lastSignInAt
        ? new Date(clerkUser.lastSignInAt)
        : null,
    },
  });

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">用户列表</h1>
              <p className="text-sm text-muted-foreground">
                用户登录后会自动同步到数据库。
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/">返回首页</Link>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <div className="border-b border-border px-6 py-4 text-sm font-medium">
            当前用户（{users.length}）
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-muted/50 text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 font-medium">用户</th>
                  <th className="px-6 py-3 font-medium">邮箱</th>
                  <th className="px-6 py-3 font-medium">用户名</th>
                  <th className="px-6 py-3 font-medium">手机号</th>
                  <th className="px-6 py-3 font-medium">状态</th>
                  <th className="px-6 py-3 font-medium">最近登录</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-border hover:bg-muted/30"
                  >
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        {user.imageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={user.imageUrl}
                            alt={user.name ?? "User avatar"}
                            className="h-8 w-8 rounded-full border border-border"
                          />
                        ) : (
                          <div className="h-8 w-8 rounded-full border border-border bg-muted" />
                        )}
                        <div className="flex flex-col">
                          <span className="font-medium text-foreground">
                            {user.name ?? "未命名"}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {user.clerkId ?? "未绑定 Clerk"}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-muted-foreground">
                      {user.email ?? "-"}
                    </td>
                    <td className="px-6 py-3 text-muted-foreground">
                      {user.username ?? "-"}
                    </td>
                    <td className="px-6 py-3 text-muted-foreground">
                      {user.phone ?? "-"}
                    </td>
                    <td className="px-6 py-3 text-muted-foreground">
                      {user.status}
                    </td>
                    <td className="px-6 py-3 text-muted-foreground">
                      {user.lastSignInAt
                        ? user.lastSignInAt.toLocaleString("zh-CN")
                        : "-"}
                    </td>
                  </tr>
                ))}
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-8 text-center text-muted-foreground"
                    >
                      暂无用户数据
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
