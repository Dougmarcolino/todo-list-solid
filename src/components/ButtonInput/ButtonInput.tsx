export const ButtonInput = ({ label }: { label: string }) => {
  return (
    <button className="bg-pink-600 h-[46px] w-[200px] text-pink-100 rounded-3xl">
      {label}
    </button>
  );
};
