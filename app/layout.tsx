/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
// import './globals.css'
 
export const metadata = {
  title: 'Next.js + Clerk Starter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
