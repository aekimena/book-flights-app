function formatDate(date: Date) {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function getMonthYearDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getFormattedTime(date: Date) {
  let hours = date.getHours();
  let minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';

  hours = hours % 12 || 12; // convert to 12-hour format
  const formattedHours = String(hours).padStart(2, '0');

  return `${formattedHours}:${minutes} ${ampm}`;
}

function formatMinutesToHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} hr ${minutes} min`;
}

export {
  formatDate,
  getMonthYearDate,
  getFormattedTime,
  formatMinutesToHoursAndMinutes,
};
