import { useAuthContext } from "../hook/useAuthContext"

export function Login() {

    const { handleSignIn } = useAuthContext();

    return (
        <div>
            <button className="text-teal-100" onClick={handleSignIn}>
                Login
            </button>
        </div>
    )
}