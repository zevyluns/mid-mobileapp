import React, { createContext, ReactNode, useState } from "react";

type User = {
  username: string;
  password: string;
  status: number;
  name: string;
};

type LoginResult = "success" | "invalid_credentials" | "blocked_status";

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => LoginResult;
  register: (username: string, password: string) => boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {

  const [users, setUsers] = useState<User[]>([
    {
      // status = 0 artinya asrama, status = 1 artinya outsider
      username: "exampleemail@student.school.com",
      password: "12345",
      status: 0,
      name: "Placeholder1"
    },
    {
      username: "exampleemail2@student.school.com",
      password: "12345",
      status: 1,
      name: "Placeholder2"
    }
  ]);

  const [user, setUser] = useState<User | null>(null);

  const register = (username: string, password: string) => {

    const exists = users.find(u => u.username === username);
    if (exists) return false;

    setUsers([
      ...users,
      {
        username,
        password,
        status: 0, // default status
        name: "New User"
      }
    ]);

    return true;
  };

  const login = (username: string, password: string): LoginResult => {

    const found = users.find(
      u => u.username === username && u.password === password
    );

    if (!found) return "invalid_credentials";

    if (found.status === 1) return "blocked_status";

    setUser(found);
    return "success";
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}