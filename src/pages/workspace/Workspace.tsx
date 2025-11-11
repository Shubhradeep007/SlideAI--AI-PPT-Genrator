import { firebaseDb } from "@/config/FirebaseConfig";
import { UserDetailContext } from "@/hooks/context/UserDetailContext";

import { useUser } from "@clerk/clerk-react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Footer from "@/layout/Footer";
import { Outlet } from "react-router-dom";


const Workspace = () => {
  const { user} = useUser();
  const { setUserDetail} = useContext(UserDetailContext)

  useEffect(() => {
    if (user) {
      createNewUser();
    }

  }, [user]);

  const createNewUser = async () => {
    if (user) {
      const docRef = doc(
        firebaseDb,
        "users",
        user?.primaryEmailAddress?.emailAddress ?? ""
      );
      const docSnap = await getDoc(docRef);


      if (docSnap.exists()) {
        console.log("Document Data: ", docSnap.data());
        setUserDetail(docSnap.data())

      } else {

        const data = {
          fullName: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
            createdAt: new Date(),
            credits: 2,
        }

        await setDoc(
          doc(
            firebaseDb,
            "users",
            user?.primaryEmailAddress?.emailAddress ?? ""
          ),
          {
            ...data,
          }
        );
        setUserDetail(data)
      }
    }
  };

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Workspace;
