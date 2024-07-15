import Image from "next/image";
import { Cat } from "@/types/CatTypes";

interface CatCardProps {
  cat: Cat;
}

export default function CatCard({ cat }: CatCardProps) {
  return (
    <div>
      <Image src={`${cat.url}`} alt={cat.id} width={300} height={400} />
    </div>
  );
}
