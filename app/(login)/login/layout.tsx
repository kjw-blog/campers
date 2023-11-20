import Link from 'next/link';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex w-[420px] rounded-sm border border-zinc-200 bg-white p-4 py-10 shadow-md">
      {children}
      <div className="absolute -bottom-12 left-0 block w-full space-x-4 text-center text-sm font-semibold ">
        <span className="select-none text-zinc-500">계정이 없으신가요?</span>
        <Link
          href="/signup"
          className="cursor-pointer font-semibold text-camp-heavy"
        >
          가입하기
        </Link>
      </div>
    </div>
  );
}
