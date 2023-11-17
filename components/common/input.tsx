export const Input = () => {
  return (
    <div className="relative w-full rounded-sm border border-zinc-300">
      <input
        type="text"
        required
        className="peer w-full rounded-sm px-[10px] py-4 text-sm text-zinc-500 outline-none focus:placeholder:opacity-0"
        placeholder="아이디를 입력해 주세요."
      />
      <label className="absolute left-[10px] top-4 bg-white px-1 text-sm text-zinc-500 opacity-0 transition peer-valid:-translate-y-[26px] peer-valid:opacity-100 peer-focus:-translate-y-[26px] peer-focus:opacity-100">
        아이디
      </label>
      <p className="absolute -bottom-6 text-xs font-bold text-rose-600">
        아이디를 입력해 주세요.
      </p>
    </div>
  );
};
