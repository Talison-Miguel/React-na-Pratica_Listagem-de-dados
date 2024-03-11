import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
  </React.StrictMode>,
)
