import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

export function useAuthContext() {
    const context = useContext(AuthContext)

    if(context === undefined) {
        throw new Error("Não está dentro do contexto de autenticação")
    }

    return context
}