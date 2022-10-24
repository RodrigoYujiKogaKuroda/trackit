import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}) {

    const [user, setUser] = useState({});

    const [percentage, setPercentage] = useState(0);

    const config = { headers: { Authorization: `Bearer ${user.token}` } }

    return (
        <AuthContext.Provider value={{ user, setUser, percentage, setPercentage, config }}>
            {children}
        </AuthContext.Provider>
    )

}