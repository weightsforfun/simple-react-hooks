import { useState, useEffect } from "react";
export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const page_title = document.querySelector("title");
    page_title.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
