export const generateID = () => {
  const random = Math.random().toString(36).substring(2);
  const dateID = Date.now().toString(36);
  return random + dateID;
};

export const formattingDate = (date) => {
  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return newDate.toLocaleDateString("es-Es", options);
};
