import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { AuthContextProvider } from "./context/auth-context";


export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
};