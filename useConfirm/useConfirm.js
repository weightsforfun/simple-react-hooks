export const useConfirm = (message = "", onConfirm, onCancle) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (!onCancle || typeof onCancle !== "function") {
    return;
  }
  const checkConfirm = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  };
  return checkConfirm;
};
