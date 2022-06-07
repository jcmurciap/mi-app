import { useState } from "react"

interface User {
    uid: string,
    name: string
}

export const Usuario = () => {

    const [user, setUser] = useState<User>();
    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Juan Camilo'
        })
    }

    return (
        <div className="mt-5">
            <h3>Usuario: {user?.name}</h3>
            <button
                onClick={ login } 
                className="btn btn-outline-primary"
            >
                Login
            </button>
            {
                (!user)
                ? <pre>No existe usuario</pre>
                : <pre>{JSON.stringify(user)}</pre>
            }
        </div>
    )
}
