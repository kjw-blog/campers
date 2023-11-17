import Link from 'next/link';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex w-[420px] rounded-sm border border-zinc-300 bg-white p-4 py-10 shadow-md">
      <h3 className="text-camp-heavy absolute -top-20 left-0 select-none text-[48px] font-bold">
        Campers
      </h3>
      {children}
      <div className="absolute -bottom-12 left-0 block w-full space-x-4 text-center text-sm font-semibold ">
        <span className="select-none text-zinc-500">계정이 없으신가요?</span>
        <Link
          href="/signup"
          className="text-camp-heavy cursor-pointer font-semibold"
        >
          가입하기
        </Link>
      </div>
    </div>
  );
}
