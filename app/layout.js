import Header from "./components/header/Header";
import Providers from './providers/providers'
import "./globals.css";

export const metadata = {
  title: "MoZher",
  description: "Showroom site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
  
      <body >
        <Providers>
        <Header />
        {children}
        </Providers>
        </body>
       
    </html>
  );
}
