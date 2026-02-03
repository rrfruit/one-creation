"use client";

import * as React from "react";
import { useSearchParams, usePathname } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export interface DataPaginationProps {
  /** 当前页码 */
  currentPage: number;
  /** 总页数 */
  totalPages: number;
  /** 总条数（可选，用于显示） */
  totalItems?: number;
  /** 每页条数（可选，用于显示） */
  pageSize?: number;
  /** 显示的页码按钮数量，默认 5 */
  siblingCount?: number;
  /** 自定义 URL 构建函数，返回指定页码的 URL */
  buildPageUrl?: (page: number) => string;
  /** 页码变化回调（用于客户端分页） */
  onPageChange?: (page: number) => void;
  /** 是否显示页码信息 */
  showPageInfo?: boolean;
  /** 自定义类名 */
  className?: string;
}

/**
 * 通用分页组件
 *
 * 支持两种使用方式：
 * 1. URL 分页（SSR）：通过 buildPageUrl 或自动使用 searchParams
 * 2. 客户端分页：通过 onPageChange 回调
 *
 * @example
 * // URL 分页（自动使用 searchParams 中的 page 参数）
 * <DataPagination currentPage={1} totalPages={10} />
 *
 * @example
 * // 自定义 URL 构建
 * <DataPagination
 *   currentPage={page}
 *   totalPages={totalPages}
 *   buildPageUrl={(p) => `/users?page=${p}&search=${search}`}
 * />
 *
 * @example
 * // 客户端分页
 * <DataPagination
 *   currentPage={page}
 *   totalPages={totalPages}
 *   onPageChange={(p) => setPage(p)}
 * />
 */
export function DataPagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  siblingCount = 1,
  buildPageUrl,
  onPageChange,
  showPageInfo = true,
  className,
}: DataPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 如果没有提供 buildPageUrl，使用默认的 URL 构建函数
  const defaultBuildPageUrl = React.useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());
      return `${pathname}?${params.toString()}`;
    },
    [pathname, searchParams]
  );

  const getPageUrl = buildPageUrl || defaultBuildPageUrl;

  // 处理页码点击
  const handlePageClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number
  ) => {
    if (onPageChange) {
      e.preventDefault();
      onPageChange(page);
    }
    // 如果没有 onPageChange，让默认的链接行为处理导航
  };

  // 生成要显示的页码数组
  const generatePageNumbers = (): (number | "ellipsis")[] => {
    const pages: (number | "ellipsis")[] = [];

    // 总是显示第一页
    pages.push(1);

    // 计算中间页码的范围
    const leftSibling = Math.max(2, currentPage - siblingCount);
    const rightSibling = Math.min(totalPages - 1, currentPage + siblingCount);

    // 是否需要左侧省略号
    const showLeftEllipsis = leftSibling > 2;

    // 是否需要右侧省略号
    const showRightEllipsis = rightSibling < totalPages - 1;

    if (showLeftEllipsis) {
      pages.push("ellipsis");
    }

    // 添加中间的页码
    for (let i = leftSibling; i <= rightSibling; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }

    if (showRightEllipsis) {
      pages.push("ellipsis");
    }

    // 总是显示最后一页（如果大于1）
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  // 如果只有一页或没有页面，不显示分页
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = generatePageNumbers();

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-between gap-4",
        className
      )}
    >
      {showPageInfo && (
        <div className="text-sm text-muted-foreground order-2 sm:order-1">
          {totalItems !== undefined ? (
            <>
              共 {totalItems.toLocaleString()} 条，第 {currentPage} /{" "}
              {totalPages} 页{pageSize && `，每页 ${pageSize} 条`}
            </>
          ) : (
            <>
              第 {currentPage} 页，共 {totalPages} 页
            </>
          )}
        </div>
      )}

      <Pagination className="order-1 sm:order-2 mx-0 w-auto">
        <PaginationContent>
          {/* 上一页 */}
          <PaginationItem>
            {currentPage > 1 ? (
              <PaginationPrevious
                href={getPageUrl(currentPage - 1)}
                onClick={(e) => handlePageClick(e, currentPage - 1)}
              />
            ) : (
              <PaginationPrevious
                href="#"
                className="pointer-events-none opacity-50"
                aria-disabled="true"
              />
            )}
          </PaginationItem>

          {/* 页码 */}
          {pageNumbers.map((pageNum, index) => (
            <PaginationItem key={`${pageNum}-${index}`}>
              {pageNum === "ellipsis" ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href={getPageUrl(pageNum)}
                  isActive={pageNum === currentPage}
                  onClick={(e) => handlePageClick(e, pageNum)}
                >
                  {pageNum}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* 下一页 */}
          <PaginationItem>
            {currentPage < totalPages ? (
              <PaginationNext
                href={getPageUrl(currentPage + 1)}
                onClick={(e) => handlePageClick(e, currentPage + 1)}
              />
            ) : (
              <PaginationNext
                href="#"
                className="pointer-events-none opacity-50"
                aria-disabled="true"
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
