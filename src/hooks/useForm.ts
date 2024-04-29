import { ReactElement, useState } from "react";

const useForm = (steps: ReactElement[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPage = () => {
   setCurrentIndex( prev => {
      if(prev <= 0){
         return prev
      }
      return prev -1
   })
  };

  const nextPage = () => {
    setCurrentIndex(prev => {
      if (prev >= steps.length - 1) {
        return prev
      }
      return prev + 1
    });
  };

  return {
    currentIndex,
    steps,
    step: steps[currentIndex],
    isFirstPage: currentIndex === 0,
    isLastPage: currentIndex === steps.length - 1,
    nextPage,
    prevPage,
  };
};

export default useForm;
