import { useState } from "react";
import useEventListener from "./useEventListener";

export default function useHover(ref) {
  
  const[hovered, setHovered] = useState(false)

  console.log(ref);

  useEventListener('mouseover', () => setHovered(true), ref.current)
  useEventListener('mouseout', () => setHovered(false), ref.current)

  return hovered
};
