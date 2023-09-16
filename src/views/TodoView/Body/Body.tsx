import { ButtonInput } from "../../../components/ButtonInput/ButtonInput";

export const Body: React.FC = () => {
  return (
    <div className="bg-pink-100 h-[400px] w-[400px] rounded-lg drop-shadow-md relative">
      <div className="absolute -bottom-6 flex justify-center w-full">
        <ButtonInput label="Add"></ButtonInput>
      </div>
    </div>
  );
};
