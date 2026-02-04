import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Users, Workflow, TrendingUp, Clock } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">仪表盘</h1>
        <p className="text-muted-foreground">系统概览与统计数据</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">总用户数</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-</div>
            <p className="text-xs text-muted-foreground">
              查看用户管理了解详情
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">工作流数量</CardTitle>
            <Workflow className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-</div>
            <p className="text-xs text-muted-foreground">已创建的工作流</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">今日活跃</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-</div>
            <p className="text-xs text-muted-foreground">今日活跃用户数</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">运行时长</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-</div>
            <p className="text-xs text-muted-foreground">系统正常运行</p>
          </CardContent>
        </Card>
      </div>

      {/* 快捷入口 */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>快捷操作</CardTitle>
            <CardDescription>常用管理功能入口</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <a
              href="/admin/users"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <Users className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">用户管理</p>
                <p className="text-sm text-muted-foreground">
                  查看和管理所有用户
                </p>
              </div>
            </a>
            <a
              href="/admin/workflows"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <Workflow className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">工作流管理</p>
                <p className="text-sm text-muted-foreground">管理系统工作流</p>
              </div>
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>系统信息</CardTitle>
            <CardDescription>当前系统状态</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">版本</span>
                <span className="font-medium">v1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">环境</span>
                <span className="font-medium">
                  {process.env.NODE_ENV === "production"
                    ? "生产环境"
                    : "开发环境"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">数据库</span>
                <span className="font-medium text-green-600">已连接</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
