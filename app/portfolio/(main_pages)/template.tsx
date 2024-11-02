import Transition from "@/app/portfolio/components/animations/Transition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Transition>
      <div className="m-auto h-full w-full px-2 text-center sm:mb-16 sm:p-0 md:mb-4 xl:w-4/5">
        {children}
      </div>
    </Transition>
  );
}
