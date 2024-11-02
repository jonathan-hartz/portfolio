import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute left-2 top-2 block">
      <Image src={"/logo_m.png"} width={40} height={40} alt={"Mon logo"} />
    </div>
  );
}
