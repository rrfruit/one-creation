import { UserService } from "@/services/user.service";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const search = params.search || "";

  const {
    items: users,
    total,
    totalPages,
  } = await UserService.list({
    page,
    pageSize: 10,
    search,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">用户管理</h1>
        <p className="text-muted-foreground">查看和管理所有用户</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>用户列表</CardTitle>
          <CardDescription>共 {total} 位用户</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">用户</th>
                  <th className="text-left py-3 px-4 font-medium">邮箱</th>
                  <th className="text-left py-3 px-4 font-medium">角色</th>
                  <th className="text-left py-3 px-4 font-medium">积分</th>
                  <th className="text-left py-3 px-4 font-medium">状态</th>
                  <th className="text-left py-3 px-4 font-medium">注册时间</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        {user.imageUrl ? (
                          <img
                            src={user.imageUrl}
                            alt=""
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">
                            {user.nickname?.[0] || user.email?.[0] || "?"}
                          </div>
                        )}
                        <span>{user.nickname || "-"}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {user.email || "-"}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                          user.role === "ADMIN"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {user.role === "ADMIN" ? "管理员" : "用户"}
                      </span>
                    </td>
                    <td className="py-3 px-4">{user.credits}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "ACTIVE"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        }`}
                      >
                        {user.status === "ACTIVE" ? "正常" : "禁用"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {user.createdAt.toLocaleDateString("zh-CN")}
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-8 text-center text-muted-foreground"
                    >
                      暂无用户数据
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* 分页 */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <a
                  key={p}
                  href={`/users?page=${p}${search ? `&search=${search}` : ""}`}
                  className={`px-3 py-1 rounded text-sm ${
                    p === page
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {p}
                </a>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
