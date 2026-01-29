# 项目设计指南

本指南以“清晰的边界、可审计、可扩展”为核心。

## 1. 领域模型

- Workflow = 生成流程定义（固定 cost）
- WorkflowRun = 一次具体执行（记录 params/result/status）
- CreditLedger = 事实记录（积分变更）
- User.credits = 当前余额（用于性能）
- RechargeOrder = 充值订单（对账与追踪）

## 2. 状态设计

- WorkflowStatus：ACTIVE / INACTIVE
- RunStatus：QUEUED / RUNNING / SUCCEEDED / FAILED / CANCELED
- LedgerType：RECHARGE / CONSUME / REFUND / ADJUST
- OrderStatus：PENDING / PAID / FAILED / REFUNDED

## 3. 扣费规则

- 以 Workflow.creditCost 为准
- 执行时在 WorkflowRun.costCredits 存快照
- 扣费与写流水必须在同一事务中完成

## 4. 一致性策略（重要）

- 任何积分变动必须：
  - 写入 CreditLedger
  - 同时更新 User.credits
- 若出现不一致，以 Ledger 汇总为准做修复

## 5. 安全与权限

- 普通用户只能查看/操作自己的 WorkflowRun 与 Ledger
- 管理员可查看全量数据
- 关键操作记录审计字段（操作人、时间）

## 6. 扩展方向

目前 ledger 使用 type + refId 作为通用引用：

- refId 可指向 workflowRunId / orderId / 外部支付号
- 若需要强约束，可恢复外键模型
