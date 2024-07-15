import Image from "next/image";
import { Cat } from "@/types/CatTypes";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useCatStore } from "@/store/catStore";
import { MotionDiv } from "./MotionDiv";

interface CatCardProps {
  cat: Cat;
  index: number;
}

export default function CatCard({ cat, index }: CatCardProps) {
  const { favoriteCats, toggleFavorite } = useCatStore();
  const isFavorite = favoriteCats.some((fav) => fav.id === cat.id);

  const imageUrl = cat.url || "";

  if (!imageUrl) return null;

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.05,
        ease: "easeInOut",
        duration: 0.2,
      }}
      className="rounded relative w-full"
    >
      <Image
        src={`${cat.url}`}
        alt={cat.id}
        width={300}
        height={400}
        className="w-full"
      />
      <button onClick={() => toggleFavorite(cat)}>
        {isFavorite ? <BsHeartFill /> : <BsHeart />}
      </button>
    </MotionDiv>
  );
}
