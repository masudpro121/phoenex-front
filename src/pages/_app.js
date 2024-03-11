import { WorkspaceProvider } from "@/context/workspaceProvider";
import { Inter } from "next/font/google";
import 'react-loading-skeleton/dist/skeleton.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./globals.css";
import "./styles.css";

import WorkspaceLayout from "@/components/layouts/workspace";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/workspace/")) {
    return (
      <WorkspaceProvider>
        <WorkspaceLayout>
          <Component {...pageProps} />
        </WorkspaceLayout>
      </WorkspaceProvider>
    );
  }
  return (
    <WorkspaceProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
   </WorkspaceProvider>
  );
}
