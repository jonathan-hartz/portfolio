"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  const handleClick = () => {
    return router.push("/portfolio/");
  };

  return (
    <div
      onClick={handleClick}
      className="absolute left-2 top-2 z-50 block cursor-pointer"
    >
      <Image src={"/logo_b.png"} width={40} height={40} alt={"Mon logo"} />
    </div>
  );
}
