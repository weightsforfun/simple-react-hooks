import { useState } from "react";
export const useTabs = (initialTabs, allTabs) => {
  const [currentTabs, setCurrentTabs] = useState(initialTabs);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentTabs],
    changeTabs: setCurrentTabs,
  };
};
