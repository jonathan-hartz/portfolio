export default function ProjectPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-4 h-5/6 overflow-x-hidden rounded-lg border-2 border-solid border-indigo-800 bg-indigo-900/80 px-6 py-8 sm:py-12 md:overflow-y-auto">
      <div className="m-auto w-full">
        <div className="relative">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
