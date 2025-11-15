import { firebaseDb, GemeniAIModel } from "@/config/FirebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SliderStyle from "@/components/custom/SliderStyle";
import OutlineSection from "@/components/custom/OutlineSection";
import { ArrowRight, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundBeamsWithCollision from "@/components/ui/background-beams-with-collision";

const OUTLINE_PROMPT = `
Generate a PowerPoint slide outline for the topic {userInput}.". Create {noOfSlider} slides in total. Each slide should include a topic name and a 2-line descriptive outline that clearly explains what content the slide will cover.
Include:
1st slide - Welcome
2nd slide - Agenda
Last slide - Thank You

Return **ONLY JSON**:
[
 { "slideNo": "", "slidePoint": "", "outline": "" }
]
`;

export type Project = {
  userInputPrompt: string;
  projectId: string;
  createdAt: number;
  noOfSlider: string;
  outline?: SlideOutline[];
  slides: any[];
  designStyle: DesignStyle;
};

export type SlideOutline = {
  slideNo: string;
  slidePoint: string;
  outline: string;
};

export type DesignStyle = {
  colors: any;
  designGuide: string;
  styleName: string;
};

const Outline = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [, setProjectDetail] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [outline, setOutline] = useState<SlideOutline[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle | null>(null);

  useEffect(() => {
    if (id) {
      GetProjectDetail(id);
    }
  }, [id]);

  const GetProjectDetail = async (projectId: string) => {
    setLoading(true);

    const docRef = doc(firebaseDb, "projects", projectId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.log("❌ No such document!");
      setLoading(false);
      return;
    }

    const data = docSnap.data() as Project;
    setProjectDetail(data);

    if (!data.outline || data.outline.length === 0) {
      await GenerateSlidersOutline(data);
    } else {
      setOutline(data.outline);
      setLoading(false);
    }
  };

  const GenerateSlidersOutline = async (projectData: Project) => {
    setLoading(true);

    const prompt = OUTLINE_PROMPT.replace(
      "{userInput}",
      projectData.userInputPrompt
    ).replace("{noOfSlider}", projectData.noOfSlider);

    const result = await GemeniAIModel.generateContent(prompt);
    const text = result.response.text();

    const rawJson = text.replace("```json", "").replace("```", "");
    const jsonData = JSON.parse(rawJson);

    setOutline(jsonData);
    setLoading(false);
  };

  const handleUpdateOutline = (index: string, value: SlideOutline) => {
    setOutline((prev) =>
      prev.map((item) =>
        item.slideNo === index ? { ...item, ...value } : item
      )
    );
  };

  const onGenerateSlider = async () => {
    console.log("onGenerateSlider - Starting slide generation");
    console.log("  - Selected style:", selectedStyle);
    console.log("  - Outline length:", outline.length);

    if (!selectedStyle) {
      console.error("❌ No style selected");
      alert("Please select a design style first!");
      return;
    }

    if (!outline || outline.length === 0) {
      console.error("❌ No outline available");
      alert("Please wait for the outline to be generated!");
      return;
    }

    setLoading(true);

    try {
      console.log("💾 Saving designStyle and outline to Firestore...");
      console.log("  - Outline to save:", JSON.stringify(outline, null, 2));
      console.log("  - Outline items count:", outline.length);
      console.log("  - Design style:", selectedStyle?.styleName);

      // Save outline and design style to database
      await setDoc(
        doc(firebaseDb, "projects", id as string),
        {
          designStyle: selectedStyle,
          outline: outline, // Save the complete outline array from AI
        },
        { merge: true }
      );

      console.log("✅ Outline and designStyle saved successfully to database");
      console.log("  - Saved outline items:", outline.length);

      // Verify the save by reading back
      const verifyDoc = await getDoc(doc(firebaseDb, "projects", id as string));
      if (verifyDoc.exists()) {
        const savedData = verifyDoc.data();
        console.log(
          "✅ Verification - Outline in database:",
          savedData.outline?.length || 0,
          "items"
        );
        if (savedData.outline && savedData.outline.length > 0) {
          console.log(
            "  - First saved item:",
            JSON.stringify(savedData.outline[0], null, 2)
          );
        }
      }

      // Small delay to ensure Firestore has fully propagated
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("🧭 Navigating to editor page...");
      // navigate to slider editor
      navigate("/workspace/project/" + id + "/editor");
    } catch (error) {
      console.error("❌ Error saving data:", error);
      alert("Failed to save project data. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-auto bg-black flex flex-col pt-10">
        <BackgroundBeamsWithCollision
          className={`w-full ${
            loading ? "bg-gray-900" : "bg-black"
          } min-h-screen h-auto`}
        >
          {/* Outer Container */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 px-6 mt-32 md:mt-20">
            {/* LEFT: Design Selection Panel */}
            <div className="w-full md:w-1/3 bg-transparent">
              <h2 className="font-bold text-2xl mb-4 text-white">
                Setting & Slide Outline
              </h2>

              <div className="sticky top-10">
                <SliderStyle
                  selectStyle={(value: DesignStyle) => setSelectedStyle(value)}
                />
              </div>
            </div>

            {/* RIGHT: Outline Section (scrollable) */}
            <div className="w-full md:w-2/3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 overflow-y-auto max-h-[80vh] border border-white/10">
              <OutlineSection
                loading={loading}
                outline={outline}
                handleUpdateOutline={handleUpdateOutline}
              />
            </div>
          </div>

          {/* FIXED BUTTON */}
          {loading ? <>
           <Button
            onClick={onGenerateSlider}
            disabled={true}
            size={"lg"}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 border bg-amber-300 text-black rounded shadow-md"
          > 
            <Loader className="animate-spin w-5 h-5 text-gray-700" />
            </Button>
          </> : (
            <>
          <Button
            onClick={onGenerateSlider}
            disabled={!selectedStyle}
            size={"lg"}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 border bg-amber-300 text-black rounded shadow-md hover:bg-white cursor-pointer"
          >
            Generate Slides <ArrowRight />
          </Button>
          </>)}
          
        </BackgroundBeamsWithCollision>
      </div>
    </>
  );
};

export default Outline;
