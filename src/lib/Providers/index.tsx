"use client";

// 1. import `NextUIProvider` component
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const queryClient = new QueryClient();

function Providers({ children, themeProps }: ProvidersProps) {
  // 2. Wrap NextUIProvider at the root of your app
  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={router.push}>
        <Toaster richColors position="top-center" />
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}

export default Providers;
