import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

const Protectedroutes = () => {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && !user) {
      toast.error("Please Login to access this page.");
    }
  }, [isLoaded, user]);

  // Wait until Clerk finishes loading before deciding
  if (!isLoaded) {
    return null; // or show Loader UI
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default Protectedroutes;
