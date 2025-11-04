import { firebaseDb } from "@/config/FirebaseConfig";
import { UserDetailContext } from "@/hooks/context/UserDetailContext";
import Navbar from "@/layout/Navbar";
import { useUser } from "@clerk/clerk-react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import PromptBox from "./promtBox/PromptBox";
import MyProject from "./myproject/MyProject";

const Workspace = () => {
  const { user} = useUser();
  const { setUserDetail} = useContext(UserDetailContext)

  useEffect(() => {
    if (user) {
      createNewUser();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <PromptBox />
      <MyProject />
    </>
  );
};

export default Workspace;
