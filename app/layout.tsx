import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "GUDANG MLASS",
  description: "Warehouse Management System"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
