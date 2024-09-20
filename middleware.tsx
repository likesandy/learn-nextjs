// middleware.js
import { NextRequest, NextResponse } from 'next/server'

// 中间件可以是 async 函数，如果使用了 await
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/aaa', request.url))
}

// 设置匹配路径
export const config = {}
