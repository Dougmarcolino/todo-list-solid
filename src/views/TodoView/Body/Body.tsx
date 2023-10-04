import { Checkbox, ButtonInput } from "../../../components";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTodo } from "../../../hooks";

export const Body: React.FC = () => {
  const { tasks, isLoading } = useTodo();
  return (
    <div className="bg-pink-100 h-[400px] w-[400px] rounded-lg drop-shadow-md relative">
      <div className="w-full h-full px-16 py-8">
        {isLoading && (
          <span className="font-thin cursor-pointer pl-2 text-pink-600">
            loading tasks...
          </span>
        )}
        {!isLoading &&
          tasks?.map(({ taskDescription, id, isTaskDone }) => (
            <div className="flex items-center group relative mb-3">
              <Checkbox label={taskDescription} id={id} checked={isTaskDone} />
              <TrashIcon className="h-4 w-4 ml-2 hidden group-hover:block cursor-pointer text-pink-600" />
            </div>
          ))}
      </div>
      <div className="absolute -bottom-6 flex justify-center w-full">
        <ButtonInput label="Add" />
      </div>
    </div>
  );
};
