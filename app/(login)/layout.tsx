export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center space-y-4">
      <h3 className="select-none text-[48px] font-bold text-camp-heavy">
        Campers
      </h3>
      {children}
    </div>
  );
}
