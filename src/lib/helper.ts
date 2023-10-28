export function timeDate(format: "day" | "time") {
  const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const currentDate = new Date();
  const hour = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const day = currentDate.getDay();
  if (format === "time") {
    return `${hour}:${minutes}`;
  } else if (format === "day") {
    return week[day];
  } else {
    console.log("Make sure to provide proper format");
  }
}
