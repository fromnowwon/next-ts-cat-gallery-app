import Image from "next/image";
import { Cat } from "@/types/CatTypes";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useCatStore } from "@/store/catStore";

interface CatCardProps {
  cat: Cat;
}

export default function CatCard({ cat }: CatCardProps) {
  const { favoriteCats, toggleFavorite } = useCatStore();
  const isFavorite = favoriteCats.some((fav) => fav.id === cat.id);

  return (
    <div>
      <Image src={`${cat.url}`} alt={cat.id} width={300} height={400} />
      <button onClick={() => toggleFavorite(cat)}>
        {isFavorite ? <BsHeartFill /> : <BsHeart />}
      </button>
    </div>
  );
}
