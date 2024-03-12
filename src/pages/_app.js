import { WorkspaceProvider } from "@/context/workspaceProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import WorkspaceLayout from "@/components/layouts/workspace";
const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";

const NextProgress = dynamic(() => import("@/components/NextProgress"), {
  ssr: false,
});

export default function App({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/workspace/")) {
    return (
      <WorkspaceProvider>
        <WorkspaceLayout>
          <NextProgress />
          <Component {...pageProps} />
        </WorkspaceLayout>
      </WorkspaceProvider>
    );
  }
  return (
    <WorkspaceProvider>
      <NextProgress />

      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </WorkspaceProvider>
  );
}
