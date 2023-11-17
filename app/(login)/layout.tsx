export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-camp-light flex h-full items-center justify-center">
      {children}
    </div>
  );
}
