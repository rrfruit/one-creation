import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">系统设置</h1>
        <p className="text-muted-foreground">配置系统参数</p>
      </div>

      {/* 空状态 */}
      <Card>
        <CardHeader>
          <CardTitle>系统配置</CardTitle>
          <CardDescription>管理系统级别的设置</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Settings className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium">设置功能开发中</h3>
            <p className="text-sm text-muted-foreground mt-1">
              系统设置功能即将上线
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
