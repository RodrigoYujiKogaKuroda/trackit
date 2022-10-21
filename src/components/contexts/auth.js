import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}) {

    const [user, setUser] = useState({});

    const percentage = 67;

    return (
        <AuthContext.Provider value={{ user, setUser, percentage }}>
            {children}
        </AuthContext.Provider>
    )

}