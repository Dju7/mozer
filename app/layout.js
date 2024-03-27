import Header from "./components/header/Header";
import Providers from './providers/providers'
import Template from './/template'
import {motion} from 'framer-motion'


import "./globals.css";

export const metadata = {
  title: "MoZher",
  description: "Showroom site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
  
      <body >
        
        <Header /> 
        <Template>
        <Providers>
        {children}
        </Providers>
        </Template> 
         
      </body>
       
    </html>
  );
}
