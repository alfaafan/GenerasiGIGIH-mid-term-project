export const timestampFormatter = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours}:${minutes}`;
};
