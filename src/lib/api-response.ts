import { NextResponse } from "next/server";

/**
 * 统一 API 响应格式
 * { ok: boolean, data?: T, error?: { code: string, message: string } }
 */

// 错误码枚举
export const ErrorCode = {
  // 认证相关
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",

  // 业务错误
  INSUFFICIENT_CREDITS: "INSUFFICIENT_CREDITS",
  WORKFLOW_NOT_FOUND: "WORKFLOW_NOT_FOUND",
  ORDER_NOT_FOUND: "ORDER_NOT_FOUND",
  RUN_NOT_FOUND: "RUN_NOT_FOUND",

  // 通用错误
  BAD_REQUEST: "BAD_REQUEST",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  NOT_FOUND: "NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;

export type ErrorCodeType = (typeof ErrorCode)[keyof typeof ErrorCode];

// 响应类型定义
export interface ApiSuccessResponse<T> {
  ok: true;
  data: T;
}

export interface ApiErrorResponse {
  ok: false;
  error: {
    code: ErrorCodeType | string;
    message: string;
  };
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

// HTTP 状态码映射
const errorCodeToStatus: Record<string, number> = {
  [ErrorCode.UNAUTHORIZED]: 401,
  [ErrorCode.FORBIDDEN]: 403,
  [ErrorCode.NOT_FOUND]: 404,
  [ErrorCode.WORKFLOW_NOT_FOUND]: 404,
  [ErrorCode.ORDER_NOT_FOUND]: 404,
  [ErrorCode.RUN_NOT_FOUND]: 404,
  [ErrorCode.BAD_REQUEST]: 400,
  [ErrorCode.VALIDATION_ERROR]: 400,
  [ErrorCode.INSUFFICIENT_CREDITS]: 402,
  [ErrorCode.INTERNAL_ERROR]: 500,
};

/**
 * 成功响应
 */
export function success<T>(data: T, status = 200): NextResponse<ApiSuccessResponse<T>> {
  return NextResponse.json({ ok: true, data }, { status });
}

/**
 * 创建成功响应 (201)
 */
export function created<T>(data: T): NextResponse<ApiSuccessResponse<T>> {
  return success(data, 201);
}

/**
 * 错误响应
 */
export function error(
  code: ErrorCodeType | string,
  message: string,
  status?: number
): NextResponse<ApiErrorResponse> {
  const httpStatus = status ?? errorCodeToStatus[code] ?? 500;
  return NextResponse.json(
    {
      ok: false,
      error: { code, message },
    },
    { status: httpStatus }
  );
}

/**
 * 未授权错误
 */
export function unauthorized(message = "请先登录"): NextResponse<ApiErrorResponse> {
  return error(ErrorCode.UNAUTHORIZED, message);
}

/**
 * 禁止访问错误
 */
export function forbidden(message = "无权访问"): NextResponse<ApiErrorResponse> {
  return error(ErrorCode.FORBIDDEN, message);
}

/**
 * 未找到错误
 */
export function notFound(message = "资源不存在"): NextResponse<ApiErrorResponse> {
  return error(ErrorCode.NOT_FOUND, message);
}

/**
 * 请求参数错误
 */
export function badRequest(message = "请求参数错误"): NextResponse<ApiErrorResponse> {
  return error(ErrorCode.BAD_REQUEST, message);
}

/**
 * 验证错误
 */
export function validationError(message: string): NextResponse<ApiErrorResponse> {
  return error(ErrorCode.VALIDATION_ERROR, message);
}

/**
 * 服务器内部错误
 */
export function internalError(message = "服务器内部错误"): NextResponse<ApiErrorResponse> {
  return error(ErrorCode.INTERNAL_ERROR, message);
}

/**
 * 积分不足错误
 */
export function insufficientCredits(message = "积分不足"): NextResponse<ApiErrorResponse> {
  return error(ErrorCode.INSUFFICIENT_CREDITS, message);
}
