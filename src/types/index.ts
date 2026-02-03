/**
 * 通用类型定义
 */

// 分页参数
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

// 分页响应
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// API 响应类型 (从 lib/api-response.ts 导出)
export type { ApiResponse, ApiSuccessResponse, ApiErrorResponse } from "@/lib/api-response";
