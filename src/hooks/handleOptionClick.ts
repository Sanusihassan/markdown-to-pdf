import { Dispatch, SetStateAction } from "react";
export function useSelectedOption(
  selectedOption: number,
  setSelectedOption: Dispatch<SetStateAction<number>>
) {
  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  return handleOptionClick;
}
