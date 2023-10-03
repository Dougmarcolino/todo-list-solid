import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const ReactQueryProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const cliente = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return <QueryClientProvider client={cliente}>{children}</QueryClientProvider>;
};
