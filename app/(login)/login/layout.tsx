export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-[360px] w-[420px] rounded-sm bg-white p-4">
      <h3 className="text-camp-heavy absolute -top-20 left-0 select-none text-[48px] font-bold">
        Campers
      </h3>
      {children}
    </div>
  );
}
