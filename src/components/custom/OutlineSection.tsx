import type { SlideOutline } from "@/pages/workspace/project/outline/Outline";
import { Button } from "../ui/button";
import { ArrowRight, Edit } from "lucide-react";
import EditOutlineDiolog from "./EditOutlineDiolog";

type Props = {
  loading: boolean;
  outline: SlideOutline[];
  handleUpdateOutline: any;
};

const OutlineSection = ({ loading, outline, handleUpdateOutline }: Props) => {



  return (
    <div className="mt-7 mb-24">
      <h2 className="font-bold text-xl mb-4">Slide Outline</h2>

      {loading ? (
        // 🔥 Shimmer Loader
        <div className="space-y-4 mt-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-20 w-full animate-[shimmer_1.5s_infinite]"
            />
          ))}
        </div>
      ) : outline.length > 0 ? (
        // ✅ Slide Cards
        <div className="mt-4 space-y-4">
          {outline.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start p-5 rounded-xl border  hover:shadow-md transition-all"
            >
              {/* Left Content */}
              <div className="flex gap-4 items-start">
                {/* Slide Number Box */}
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{item.slidePoint}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-snug">
                    {item.outline}
                  </p>
                </div>
              </div>

              {/* Edit Button */}
              <EditOutlineDiolog outlineData={item} onUpdate={handleUpdateOutline}>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Edit className="h-4 w-4" />
                </Button>
              </EditOutlineDiolog>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4 text-center">
          No outline generated yet.
        </p>
      )}

      {/* <Button
        size={"lg"}
        className="fixed bottom-6 transform left-1/2 -translate-x-1/2 border bg-amber-300 text-black rounded"
      >
        Genrate Slides <ArrowRight />
      </Button> */}
    </div>
  );
};

export default OutlineSection;
