import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}) {

    const [user, setUser] = useState({});
    const [percentage, setPercentage] = useState(0);
    const [oneHundred, setOneHundred] = useState(0);
    const [habitsDone, setHabitsDone] = useState(0);

    return (
        <AuthContext.Provider value={{ user, setUser, percentage, setPercentage, oneHundred, setOneHundred, habitsDone, setHabitsDone }}>
            {children}
        </AuthContext.Provider>
    )

}