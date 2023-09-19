type ICheckbox = {
  checked?: boolean;
  id: string;
  label: string;
};

export const Checkbox = ({ checked, id, label }: ICheckbox) => {
  return (
    <div className="flex justify-center items-center">
      <input
        checked={checked}
        type="checkbox"
        id={id}
        className="
  appearance-none w-4 h-4 border-2 border-pink-600 rounded-full bg-white checked:bg-pink-600 cursor-pointer"
      />
      <label
        className={`font-thin cursor-pointer pl-2 text-pink-600 ${
          checked ? "line-through" : ""
        }`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
