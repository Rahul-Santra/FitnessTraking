import "./globals.css";

export const metadata = {
  title: "Fitness Platform",
  description: "Personalized Fitness & Women Health Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}