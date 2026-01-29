# API 设计草案

> 目标：支撑工作流列表、生成任务、积分扣费、充值与流水查询。

## 认证

- 使用 Clerk（服务端鉴权）
- 仅管理员可访问管理类接口

## 基础约定

- Base URL: `/api`
- 返回格式：`{ ok: boolean, data?: any, error?: { code: string, message: string } }`

## 工作流

### GET `/api/workflows`

获取可用工作流列表（按 `sortOrder` 排序）

响应：

```json
{
  "ok": true,
  "data": [
    {
      "id": 1,
      "name": "Text to Video",
      "coverUrl": "https://...",
      "creditCost": 20,
      "status": "ACTIVE",
      "sortOrder": 10
    }
  ]
}
```

### POST `/api/workflows`（管理员）

创建或更新工作流

请求：

```json
{
  "name": "Text to Video",
  "description": "desc",
  "coverUrl": "https://...",
  "creditCost": 20,
  "status": "ACTIVE",
  "sortOrder": 10
}
```

## 生成任务（WorkflowRun）

### POST `/api/runs`

创建生成任务并扣费（事务）

请求：

```json
{
  "workflowId": 1,
  "params": {
    "prompt": "a cyberpunk city",
    "duration": 6
  }
}
```

响应：

```json
{
  "ok": true,
  "data": {
    "id": 1001,
    "status": "QUEUED",
    "costCredits": 20
  }
}
```

### GET `/api/runs`

查询当前用户的生成任务列表

### GET `/api/runs/:id`

查询任务详情（含 result / errorMessage）

## 积分与流水

### GET `/api/credits`

获取当前余额

响应：

```json
{
  "ok": true,
  "data": { "credits": 120 }
}
```

### GET `/api/credits/ledger`

分页获取积分流水

请求参数：`page`, `pageSize`

响应：

```json
{
  "ok": true,
  "data": [
    { "id": 1, "type": "RECHARGE", "change": 100, "balanceAfter": 100 },
    { "id": 2, "type": "CONSUME", "change": -20, "balanceAfter": 80 }
  ]
}
```

## 充值

### POST `/api/recharge`

创建充值订单（后续 Stripe Checkout）

请求：

```json
{
  "amount": 9.9,
  "credits": 100
}
```

响应：

```json
{
  "ok": true,
  "data": {
    "orderId": 3001,
    "status": "PENDING"
  }
}
```

### POST `/api/recharge/webhook`（Stripe）

Stripe 回调后更新订单、写入积分流水、更新 User.credits

## 错误码建议

- `UNAUTHORIZED`
- `FORBIDDEN`
- `INSUFFICIENT_CREDITS`
- `WORKFLOW_NOT_FOUND`
- `ORDER_NOT_FOUND`
