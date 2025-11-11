import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { firebaseDb } from "@/config/FirebaseConfig";
import { useUser } from "@clerk/clerk-react";
import { doc, setDoc } from "firebase/firestore";

import { ArrowUp, Loader } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import MyBackgroundImage from '@/assets/Workspace-backgeround.webp';

const PromptBox = () => {
  const { user } = useUser();
  const [userInput, setUserInput] = useState<string>();
  const [noOfSlider, setNoOfSlider] = useState<string>("4 to 6");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const CreateAndSaveProject = async () => {
    //save project to DB
    const projectId = uuidv4();

    setLoading(true);
    await setDoc(doc(firebaseDb, "projects", projectId), {
      projectId: projectId,
      userInputPrompt: userInput,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: Date.now(),
      noOfSlider: noOfSlider
    });
    setLoading(false);
    navigate("/workspace/project/" + projectId + "/outline");
  };

  return (
    <>
    
      <div className="w-full flex items-center justify-center" style={{
        backgroundImage: `url(${MyBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 10,
        height: '100vh',
      }} >
        <div className="flex flex-col items-center justify-center space-y-4" >
          <h2 className="font-bold text-3xl">
            Describe your topic, We'll design the slides
          </h2>
          <p className="text-xl text-grey-500">
            Your Design will be saved as a new project.
          </p>

          <InputGroup>
            <InputGroupTextarea
              placeholder="Enter what kind of slide do you want to create "
              className="min-h-36"
              onChange={(e) => setUserInput(e.target.value)}
            />
            <InputGroupAddon align={"block-end"}>
              {/* <InputGroupButton>
                <PlusIcon />
              </InputGroupButton> */}
               <Select onValueChange={(value) => setNoOfSlider(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Number of Slider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>No of. Slide</SelectLabel>
                    <SelectItem value="4 to 6">4 - 6 Sliders</SelectItem>
                    <SelectItem value="6 to 8">6 - 8 Sliders</SelectItem>
                    <SelectItem value="8 to 12">8 - 12 Sliders</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <InputGroupButton
                variant={"default"}
                className="rounded-full ml-auto cursor-pointer"
                size={"icon-sm"}
                onClick={CreateAndSaveProject}
                disabled={!userInput || loading}
              >
                {loading ? <Loader className="animate-spin" /> : <ArrowUp />}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      
    </>
  );
};

export default PromptBox;
