export const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (window.Notification !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };
  return fireNotif;
};
