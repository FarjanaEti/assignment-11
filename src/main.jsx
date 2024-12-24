import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Rout/router.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
     <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
    
  </StrictMode>,
)
