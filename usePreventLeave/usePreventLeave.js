export const usePrevetLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const preventLeave = () => window.addEventListener("beforeunload", listener);
  const depreventLeave = () =>
    window.removeEventListener("beforeunload", listener);
  return { preventLeave, depreventLeave };
};
