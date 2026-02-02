import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";
import Provider from "./components/Hoc/Provider";
import ScrollToTop from "./components/Hoc/ScrollToTop";




const rubik = localFont({
	src: [
		{
			path: '../public/fonts/Rubik-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Rubik-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/Rubik-SemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../public/fonts/Rubik-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../public/fonts/Rubik-Black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
	display: 'swap',
})
export const metadata: Metadata = {
	title: "Product landing Page",
	description: "Product landing page built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${rubik.className} antialiased  min-h-screen flex flex-col`}>
				<Provider>
					{/* Header */}
					<ResponsiveNav />
					{/* Main content */}
					<main className="flex-1 pt-[12vh] ">
						{children}
					</main>
					{/* Footer */}
					<Footer />
					<ScrollToTop/>
				</Provider>
			</body>
		</html>
	)
}
