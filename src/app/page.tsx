import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Shadcn UI 已接入</CardTitle>
          <CardDescription>
            现在可以直接在项目中按需引入组件，并用 Tailwind 自由定制样式。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>示例使用了 `Card` 与 `Button` 组件。</p>
          <p>运行命令添加更多组件，然后在页面中引用即可。</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a
              href="https://ui.shadcn.com/docs/installation/next"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看文档
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href="/users">进入用户管理</a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://ui.shadcn.com/docs/components"
              target="_blank"
              rel="noopener noreferrer"
            >
              浏览组件
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
