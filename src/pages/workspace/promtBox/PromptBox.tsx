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

import { ArrowUp} from "lucide-react";

const PromptBox = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center m-35 -ml-1">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="font-bold text-3xl">
            Describe your topic, We'll design the slides
          </h2>
          <p className="text-xl text-grey-500">
            Your Design will be saved as a new project.{" "}
          </p>

          <InputGroup>
            <InputGroupTextarea placeholder="Enter waht kind of siled do you want to create " className="min-h-36"/>
            <InputGroupAddon align={"block-end"}>
              {/* <InputGroupButton>
                <PlusIcon />
              </InputGroupButton> */}
              <Select>
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
              variant={'default'}
                className="rounded-full ml-auto"
                size={'icon-sm'}
              >
                <ArrowUp />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </>
  );
};

export default PromptBox;
