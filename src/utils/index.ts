export const retroFormatDate = (date: Date) => {
  const day = date.getDate() + 1;
  let month = date.getMonth();
  const year = date.getFullYear();
  return ++month + "/" + day + "/" + year;
};

export const formatDate = (date: string | Date) => {
  date = new Date(date);
  const day = date.getDate();
  let month = date.getMonth();
  const year = date.getFullYear();
  return day + "/" + month + "/" + year;
};

export const formatTime = (time: string | Date) => {
  time = new Date(time);
  const hours = time.getHours();
  const minutes = time.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  return hours + ":" + minutes + " " + ampm;
};
