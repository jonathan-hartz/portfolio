import Sidebar from "@/app/portfolio/components/navigation/Sidebar";
import PageTransitionEffect from "@/app/portfolio/components/animations/PageTransitionEffect";
import ArrowBottom from "../components/navigation/ArrowBottom";

export default function MainPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        id="mainLayout"
        className="mt-4 flex h-5/6 w-full items-center overflow-y-auto overflow-x-hidden pb-2"
      >
        <PageTransitionEffect>{children}</PageTransitionEffect>
      </div>
      <Sidebar />
      <ArrowBottom />
    </>
  );
}
