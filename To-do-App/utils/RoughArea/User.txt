"use client";
import { account } from "@/lib/appwrite";
import Cookies from "js-cookie";
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";

type User = {
  $id: string;
  email: string;
  name: string;
};

type UserContextValue = {
  user: User | null;
  userCookie: string | undefined;
  loading: boolean;
};

export const userContext = createContext<UserContextValue | null>(null);

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [userCookie, setUserCookie] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const setUserIdCookie = (userId: string) => {
    Cookies.set("user_id", userId, { expires: 30 });
  };

  const setUserDataLocally = (resData: User) => {
    const { $id, email, name } = resData;
    const data = { $id, email, name };
    localStorage.setItem("User-Details", JSON.stringify(data));
  };

  const getUser = async () => {
    try {
      const resData: User = await account.get();

      if (resData.$id) {
        setUserIdCookie(resData.$id);
        setUserDataLocally(resData);
        setUser(resData);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("User-Details");
    const getCookies = Cookies.get("user_id");

    if (getCookies) {
      setLoading(false);
    }

    setUserCookie(getCookies);

    if (storedUserData) {
      const userData: User = JSON.parse(storedUserData);
      setUser(userData);
    } else {
      getUser();
    }
  }, []);

  const contextValue = { user, userCookie, loading };

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(userContext);

  if (!context) {
    throw new Error("User may be out of provider!!!");
  }

  return context;
};

export { UserProvider, useUserContext };
