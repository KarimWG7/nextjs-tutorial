import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// in the layout file you render the page.tsx file that you recieve as the children prop and also render all the shared elements across this route and all the routes nested in it

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
