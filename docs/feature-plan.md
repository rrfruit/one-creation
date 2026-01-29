# 功能开发计划表

本计划以版本迭代为单位，默认 2 周一个迭代，可按实际节奏调整。

## v0.1 基础闭环（必做）

- 账户与权限
  - Clerk 登录/注册
  - 用户同步（Clerk -> 本地 User）
  - 角色与后台访问控制（USER/ADMIN）
- 模板与工作流
  - Workflow 列表与详情
  - 工作流排序（sortOrder）与启用状态
- 生成流程
  - WorkflowRun 创建、状态流转
  - 任务状态轮询与进度展示
  - 结果保存（result Json）与错误提示
- 积分与扣费
  - User.credits 余额展示
  - 扣费规则：按 Workflow.creditCost
  - CreditLedger 写入（consume）

## v0.2 充值与对账（必做）

- 充值订单
  - 创建 RechargeOrder（pending）
  - Stripe checkout（占位接入）
  - 支付成功回调 -> 订单 paid
- 积分入账
  - CreditLedger 写入（recharge）
  - User.credits 余额累加
- 积分流水
  - 用户查看流水列表（分页）
  - 管理员查看全量流水

## v0.3 优化与增长（可选）

- 模板管理后台（CRUD）
- 任务重试与失败恢复
- 多语言与多租户（若需要）
- 计费策略扩展（按参数/时长/清晰度）

## 关键里程碑

- M1：完成登录与一次完整生成（含扣费）
- M2：完成充值与余额增长
- M3：上线模板管理与运营流程
