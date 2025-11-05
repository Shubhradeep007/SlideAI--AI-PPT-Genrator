import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";

const EditOutlineDiolog = ({ children, outlineData, onUpdate }: any) => {
  const [localData, setLocalData] = useState(outlineData);
  const [openDialog, setOpenDialog] = useState(false)


  const handelChange = (field: string, value: string) => {
    setLocalData({ ...localData, [field]: value });
  };

  const handelUpdateMethod = () => {
    onUpdate(outlineData?.slideNo, localData)
    setOpenDialog(false)

  }

  return (
    <div className="bg-white text-black">
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="bg-white text-black">
          <DialogHeader>
            <DialogTitle>Edit Slider Outline</DialogTitle>
            <DialogDescription>
              <div>
                <label>Slider Tittle: </label>
                <Input
                  placeholder="slider title"
                  value={localData.slidePoint}
                  onChange={(e) => handelChange("slidePoint", e.target.value)}
                />

                <div className="mt-3">
                  <label>Outline: </label>
                  <Textarea
                    placeholder="Outline"
                    value={localData.outline}
                    onChange={(e) => handelChange("outline", e.target.value)}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="bg-amber-600 hover:bg-amber-300" onClick={handelUpdateMethod}>Update</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditOutlineDiolog;
