import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

export function formatstar(stats) {
  return Array.from({ length: 5 }, (_, index) =>
    index < stats ? (
      <FaStar key={index} color="#FDC700" size={20} />
    ) : (
      <CiStar key={index} size={20} />
    )
  );
}