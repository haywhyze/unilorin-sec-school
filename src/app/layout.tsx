import type { ReactNode } from 'react'

/* Root layout is intentionally a passthrough.
   Each route group provides its own <html>/<body>:
   - (frontend) adds fonts, Header, Footer
   - (payload) uses Payload's RootLayout with its own <html>/<body> */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
