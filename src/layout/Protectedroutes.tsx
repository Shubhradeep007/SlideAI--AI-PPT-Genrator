import { useUser } from "@clerk/clerk-react"
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

const Protectedroutes = () => {
const {user} = useUser()

 useEffect(() => {
    if (!user) {
      toast.error("Please Login to access this page.");
    }
  }, [user]);
  return user ? <Outlet /> : <Navigate to="/" replace />;
}

export default Protectedroutes