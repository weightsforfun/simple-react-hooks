export const useFullScreen = (callback) => {
  const element = useRef();
  const rtn = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const fullBtn = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      rtn(true);
    }
  };
  const exitBtn = () => {
    const checkFull = document.fullscreenElement;
    if (checkFull !== null) {
      document.exitFullscreen();
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      rtn(false);
    }
  };

  return { element, fullBtn, exitBtn };
};
