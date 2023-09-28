export const ButtonInput = ({ label }: { label: string }) => {
  return (
    <div className="bg-pink-600 h-[46px] w-[336px] text-pink-100 rounded-3xl flex items-center text-sm">
      <input
        type="text"
        className="w-full h-full bg-pink-500 text-pink-100 px-4 py-2 rounded-s-3xl text-sm font-thin"
      />
      <button className="w-16 text-sm h-full font-thin">{label}</button>
    </div>
  );
};
