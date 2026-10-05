function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours > 12) {
    const pmHours = (hours - 12).toString().padStart(2, "0");
    return `${pmHours}:${minutes} pm`;
  }
  return `${time} am`;
}

export { formatAs12HourClock };
