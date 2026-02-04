import { UserService } from "@/server/services/user.service";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Badge } from "@/app/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { DataPagination } from "@/app/components/ui/data-pagination";
import { Search, Users } from "lucide-react";

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
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">用户管理</h1>
          <p className="text-muted-foreground">查看和管理所有用户</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>共 {total} 位用户</span>
        </div>
      </div>

      {/* 搜索栏 */}
      <Card>
        <CardContent className="pt-6">
          <form className="flex gap-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                name="search"
                placeholder="搜索用户名或邮箱..."
                defaultValue={search}
                className="pl-9"
              />
            </div>
            <Button type="submit" variant="secondary">
              搜索
            </Button>
            {search && (
              <Button variant="ghost" asChild>
                <a href="/admin/users">清除</a>
              </Button>
            )}
          </form>
        </CardContent>
      </Card>

      {/* 用户表格 */}
      <Card>
        <CardHeader>
          <CardTitle>用户列表</CardTitle>
          <CardDescription>
            {search ? `搜索 "${search}" 的结果` : "所有注册用户"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">用户</TableHead>
                <TableHead>邮箱</TableHead>
                <TableHead>角色</TableHead>
                <TableHead className="text-right">积分</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>注册时间</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.imageUrl || undefined} />
                        <AvatarFallback>
                          {user.nickname?.[0] || user.email?.[0] || "?"}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">
                        {user.nickname || "-"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.email || "-"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={user.role === "ADMIN" ? "default" : "secondary"}
                    >
                      {user.role === "ADMIN" ? "管理员" : "用户"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {user.credits.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "ACTIVE" ? "outline" : "destructive"
                      }
                      className={
                        user.status === "ACTIVE"
                          ? "border-green-500 text-green-600 dark:text-green-400"
                          : ""
                      }
                    >
                      {user.status === "ACTIVE" ? "正常" : "禁用"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.createdAt.toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </TableCell>
                </TableRow>
              ))}
              {users.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="h-32 text-center text-muted-foreground"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Users className="h-8 w-8 opacity-50" />
                      <span>暂无用户数据</span>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* 分页 */}
          <DataPagination
            currentPage={page}
            totalPages={totalPages}
            totalItems={total}
            pageSize={10}
            className="mt-6 pt-4 border-t"
          />
        </CardContent>
      </Card>
    </div>
  );
}
