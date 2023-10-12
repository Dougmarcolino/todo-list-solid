import { useRef, useState, RefObject } from "react";

type ButtonInputProps = {
  label: string;
  onSubmit: (inputValue: string) => void;
};

export const ButtonInput = ({ label, onSubmit }: ButtonInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>();

  const onHandleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="bg-pink-600 h-[46px] w-[336px] text-pink-100 rounded-3xl flex items-center text-sm">
      <input
        ref={inputRef as RefObject<HTMLInputElement>}
        type="text"
        className="w-full h-full bg-pink-500 text-pink-100 px-4 py-2 rounded-s-3xl text-sm font-thin"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onHandleSubmit()}
        value={inputValue}
      />
      <button
        className="w-16 text-sm h-full font-thin"
        onClick={onHandleSubmit}
      >
        {label}
      </button>
    </div>
  );
};
