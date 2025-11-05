import { firebaseDb, GemeniAIModel } from "@/config/FirebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SliderStyle from "@/components/custom/SliderStyle";
import OutlineSection from "@/components/custom/OutlineSection";
import { ArrowRight, Merge } from "lucide-react";
import { Button } from "@/components/ui/button";

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

type Project = {
  userInputPrompt: string;
  projectId: string;
  createdAt: number;
  noOfSlider: string;
  outline?: SlideOutline[];
};

export type SlideOutline = {
  slideNo: string;
  slidePoint: string;
  outline: string;
};

const Outline = () => {
  const { id } = useParams();
  const [projectDetails, setProjectDetail] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [outline, setOutline] = useState<SlideOutline[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string>();

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

  const onGenerateSlider = async (data: any) => {
    console.log("onGenerateSlider", data);

    setLoading(true);

    await setDoc(
      doc(firebaseDb, "projects", id as string),
      {
        designStyle: selectedStyle,
        outline: outline,
      },
      { merge: true }
    );

    setLoading(false);
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="max-w-3xl w-full">
        <h2 className="font-bold text-2xl">Setting and Slide Outline</h2>

        <SliderStyle selectStyle={(value: string) => setSelectedStyle(value)} />

        <OutlineSection
          loading={loading}
          outline={outline}
          handleUpdateOutline={handleUpdateOutline}
        />

        <Button
          onClick={onGenerateSlider}
          disabled={!selectedStyle}
          size={"lg"}
          className="fixed bottom-6 transform left-1/2 -translate-x-1/2 border bg-amber-300 text-black rounded"
        >
          Genrate Slides <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Outline;
