import PanelLeft from "./@home/components/PanelLeft";
import PanelRight from "./@home/components/PanelRight";

export default function Home() {
  return (
    <>
      <div className="m-auto grid h-full w-full grid-cols-1 items-start md:grid-cols-2 xl:w-3/4">
        <PanelLeft />
        <PanelRight />
      </div>
    </>
  );
}
