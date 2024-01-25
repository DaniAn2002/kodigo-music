import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { Login } from './pages/Login'
import { Register } from "./pages/Register"
import { Privacidad } from "./pages/Privacidad"
import { Politicas } from "./pages/Politicas"
import { LogedInPage } from "./pages/LogedInPage"

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/politicas', element: <Politicas /> },
    { path: '/privacidad', element: <Privacidad /> },
    { path: '/auth/home', element: <LogedInPage /> }



  ])

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
