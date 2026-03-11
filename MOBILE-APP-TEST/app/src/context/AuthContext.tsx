import React, { createContext, ReactNode, useState } from "react";

type User = {
  username: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {

  const [users, setUsers] = useState<User[]>([{ username: "exampleemail@student.school.com", password: "12345" }
]);
  const [user, setUser] = useState<User | null>(null);

  const register = (username: string, password: string) => {

    const exists = users.find(u => u.username === username);

    if (exists) return false;

    setUsers([...users, { username, password }]);
    return true;
  };

  const login = (username: string, password: string) => {

    const found = users.find(
      u => u.username === username && u.password === password
    );

    if (!found) return false;

    setUser(found);
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}