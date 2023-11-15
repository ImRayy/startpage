export function timeDate(format: "day" | "time") {
  const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const day = currentDate.getDay();
  if (format === "time") {
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour.toString().padStart(2, "0")}:${minutes} ${period}`;
  } else if (format === "day") {
    return week[day];
  } else {
    console.log("Make sure to provide proper format");
  }
}
