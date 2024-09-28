"use client";

// 1. import `NextUIProvider` component
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

function Providers({ children, themeProps }: ProvidersProps) {
  // 2. Wrap NextUIProvider at the root of your app
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      {/* <Toaster richColors position="top-center" /> */}
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}

export default Providers;
