# 开发指南

## 1. 环境准备

- Node.js 20+
- pnpm 10+
- MySQL 8+
- Clerk 环境变量已配置

## 2. 项目启动

```bash
pnpm install
pnpm run dev
```

## 3. 数据库与 Prisma

```bash
pnpm prisma db push
pnpm prisma generate
```

## 4. 核心流程（建议实现顺序）

1. Clerk 登录 -> User 同步
2. Workflow 列表（含排序）
3. WorkflowRun 创建
4. 扣费事务：
   - 校验余额
   - 创建 WorkflowRun
   - 写 CreditLedger（CONSUME）
   - 更新 User.credits
5. 充值流程（RechargeOrder + Ledger）

## 5. 事务建议

使用 Prisma 事务处理积分：

```ts
await prisma.$transaction(async (tx) => {
  // 1) 校验余额
  // 2) 写 WorkflowRun
  // 3) 写 CreditLedger
  // 4) 更新 User.credits
});
```

## 6. 代码规范

- 业务逻辑放在 server actions 或 route handlers
- 确保扣费与流水在同一事务
- 所有外部请求需记录 errorMessage

## 7. 目录约定

- `src/app`：页面与路由
- `src/lib`：数据访问与工具
- `prisma/schema.prisma`：数据模型
