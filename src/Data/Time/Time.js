export function timeToMinutes(time) {
  if (!time) return null;

  const [t, period] = time.split(" ");
  let [h, m] = t.split(":").map(Number);

  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;

  return h * 60 + m;
}
