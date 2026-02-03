import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Workflow } from "lucide-react";

export default function WorkflowsPage() {
  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">工作流管理</h1>
        <p className="text-muted-foreground">查看和管理系统工作流</p>
      </div>

      {/* 空状态 */}
      <Card>
        <CardHeader>
          <CardTitle>工作流列表</CardTitle>
          <CardDescription>所有已创建的工作流</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Workflow className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium">暂无工作流</h3>
            <p className="text-sm text-muted-foreground mt-1">
              工作流管理功能即将上线
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
