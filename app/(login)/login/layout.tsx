import Link from 'next/link';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex w-[420px] max-w-[90%] rounded-sm border border-zinc-200 bg-white p-4 py-10 shadow-md dark:bg-dark-300">
      {children}
      <div className="absolute -bottom-24 left-0 flex w-full flex-col justify-center space-y-2 text-center text-xs font-semibold md:text-sm ">
        <div className="space-x-4">
          <span className="select-none text-zinc-500">계정이 없으신가요?</span>
          <Link
            href="/signup"
            className="cursor-pointer font-semibold text-camp-heavy"
          >
            가입하기
          </Link>
        </div>
        <div className="flex select-none flex-col text-zinc-700 dark:text-zinc-500">
          <span>테스트용 계정</span>
          <span>ID : host001</span>
          <span>PW : host@123</span>
        </div>
      </div>
    </div>
  );
}
