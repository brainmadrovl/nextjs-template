import './styles/main.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'title',
    description: 'descriptionf'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}