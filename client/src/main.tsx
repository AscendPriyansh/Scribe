import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { TooltipProvider } from "@/components/ui/tooltip"
import router from './router';
import {  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from "@/contexts/ThemeContext"

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <ThemeProvider switchable>
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </TooltipProvider>
  </ThemeProvider>
)
