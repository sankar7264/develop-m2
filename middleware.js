import { NextResponse } from 'next/server'

// Next.js middleware (https://nextjs.org/docs/middleware)

export const middleware = (req) => {
  // @TODO - Remove debugging logs
  console.log({ url: req.nextUrl })
  // Required health check endpoint on VIP. Do not remove.
  if (req.nextUrl.pathname === '/cache-healthcheck') {
    return NextResponse.rewrite(new URL('/api/healthcheck', req.url))
  }

  // Continue as normal through the Next.js lifecycle.
  return NextResponse.next()
}
