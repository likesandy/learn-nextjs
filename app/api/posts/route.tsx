export async function GET() {
  console.log('GET /api/time')
  return Response.json({ data: new Date().toLocaleTimeString() })
}

// 在 Next 14 中，使用 GET HTTP 方法的路由处理程序默认是被缓存的，除非它们使用动态函数或动态配置选项。在 Next.js 15 中，GET 函数 默认不被缓存
