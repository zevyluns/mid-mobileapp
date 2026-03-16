import React, { createContext, useContext, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

type User = {
  id: Id<"users">;
  email: string;
  name: string;
  scanned?: boolean;
};

type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<{
    ok: boolean;
    error?: string;
  }>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async () => ({ ok: false }),
  signOut: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const verifyCredentials = useMutation(api.auth.verifyCredentials.verifyCredentials);

  const signIn = async (email: string, password: string) => {
    try {
      const res = await verifyCredentials({ email, password });

      setUser({
        id: res.id,
        email: res.email,
        name: res.name,
        scanned: res.scanned,
      });

      return { ok: true };
    } catch (err: any) {
      return {
        ok: false,
        error: err.message ?? "Login failed",
      };
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);