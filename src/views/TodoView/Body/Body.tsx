import { Checkbox, ButtonInput } from "../../../components";
import { TrashIcon } from "@heroicons/react/24/solid";

export const Body: React.FC = () => {
  return (
    <div className="bg-pink-100 h-[400px] w-[400px] rounded-lg drop-shadow-md relative">
      <div className="w-full h-full px-16 py-8">
        <div className="flex items-center group relative mb-3">
          <Checkbox label="My first text" id="first" />
          <TrashIcon className="h-4 w-4 ml-2 hidden group-hover:block cursor-pointer text-pink-600" />
        </div>
      </div>
      <div className="absolute -bottom-6 flex justify-center w-full">
        <ButtonInput label="Add" />
      </div>
    </div>
  );
};
