# 项目目录结构

> 本文档描述 One Creation 项目的目录组织规范。

## 目录树

```
one-creation/
├── docs/                         # 项目文档
│   ├── api-spec.md               # API 设计草案
│   ├── design-guidelines.md      # 设计指南
│   ├── development-guide.md      # 开发指南
│   ├── feature-plan.md           # 功能计划
│   └── project-structure.md      # 目录结构说明（本文件）
│
├── prisma/                       # Prisma 数据库
│   └── schema.prisma             # 数据模型定义
│
├── public/                       # 静态资源
│
├── src/                          # 源代码
│   ├── app/                      # Next.js App Router
│   │   ├── (auth)/               # 认证相关页面（路由组）
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── api/                  # API 路由
│   │   │   ├── workflows/        # 工作流 API
│   │   │   ├── runs/             # 生成任务 API
│   │   │   ├── credits/          # 积分 API
│   │   │   └── recharge/         # 充值 API
│   │   ├── globals.css           # 全局样式
│   │   ├── layout.tsx            # 根布局
│   │   └── page.tsx              # 首页
│   │
│   ├── actions/                  # Server Actions
│   │   └── index.ts
│   │
│   ├── components/               # React 组件
│   │   ├── layout/               # 布局组件
│   │   │   ├── Header.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── index.ts
│   │   └── ui/                   # shadcn/ui 基础组件
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── index.ts
│   │
│   ├── constants/                # 常量定义
│   │   └── index.ts
│   │
│   ├── generated/                # 自动生成的代码
│   │   └── prisma/               # Prisma Client
│   │
│   ├── hooks/                    # 自定义 React Hooks
│   │   └── index.ts
│   │
│   ├── lib/                      # 工具函数和配置
│   │   ├── api-response.ts       # 统一 API 响应格式
│   │   ├── prisma.ts             # Prisma 客户端实例
│   │   └── utils.ts              # 通用工具函数
│   │
│   ├── services/                 # 业务逻辑层
│   │   └── index.ts
│   │
│   ├── types/                    # TypeScript 类型定义
│   │   └── index.ts
│   │
│   └── proxy.ts                  # Next.js 请求代理（中间件）
│
├── .env                          # 环境变量（不提交）
├── .gitignore
├── components.json               # shadcn/ui 配置
├── next.config.ts                # Next.js 配置
├── package.json
├── postcss.config.mjs
├── prisma.config.ts              # Prisma 配置
├── tailwind.config.ts            # Tailwind 配置
└── tsconfig.json                 # TypeScript 配置
```

## 目录职责

### `src/app/`

Next.js App Router 目录，包含页面和 API 路由。

- **路由组 `(auth)/`** - 认证相关页面，括号表示不影响 URL 路径
- **`api/`** - REST API 端点，每个子目录对应一个资源

### `src/components/`

React 组件，按类型分组：

| 目录         | 说明                                                |
| ------------ | --------------------------------------------------- |
| `layout/`    | 布局组件：Header、Footer、Sidebar、ThemeProvider 等 |
| `ui/`        | shadcn/ui 基础组件，通过 CLI 添加                   |
| `[feature]/` | 按功能模块组织的业务组件（如需要时创建）            |

### `src/services/`

业务逻辑层，封装数据库操作和业务规则。

```typescript
// 示例：src/services/workflow.service.ts
export class WorkflowService {
  static async list() {
    /* ... */
  }
  static async create(data: CreateWorkflowInput) {
    /* ... */
  }
}
```

### `src/actions/`

Server Actions，可在客户端组件中直接调用。

```typescript
// 示例：src/actions/run.actions.ts
"use server";
export async function createRun(workflowId: number, params: RunParams) {
  /* ... */
}
```

### `src/lib/`

工具函数和配置：

| 文件              | 说明                               |
| ----------------- | ---------------------------------- |
| `prisma.ts`       | Prisma 客户端单例                  |
| `api-response.ts` | 统一 API 响应格式（success/error） |
| `utils.ts`        | 通用工具函数（cn 等）              |

### `src/types/`

TypeScript 类型定义，全局共享的接口和类型。

### `src/constants/`

常量定义，如分页默认值、应用配置等。

### `src/hooks/`

自定义 React Hooks。

## 命名规范

| 类型      | 规范                | 示例                                     |
| --------- | ------------------- | ---------------------------------------- |
| 组件文件  | PascalCase          | `Header.tsx`, `ThemeToggle.tsx`          |
| 工具/服务 | kebab-case          | `api-response.ts`, `workflow.service.ts` |
| Hooks     | camelCase，use 前缀 | `useDebounce.ts`                         |
| 常量      | UPPER_SNAKE_CASE    | `DEFAULT_PAGE_SIZE`                      |
| 类型/接口 | PascalCase          | `ApiResponse`, `PaginationParams`        |

## 导入别名

项目配置了 `@/` 别名指向 `src/` 目录：

```typescript
import { Button } from "@/app/components/ui/button";
import { prisma } from "@/lib/prisma";
import { success, error } from "@/lib/api-response";
```
