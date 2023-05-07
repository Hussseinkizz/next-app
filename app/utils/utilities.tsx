export function _numberFormat(number: number) {
  const formatter = Intl.NumberFormat("en", { notation: "standard" });
  const formattedNumber = formatter.format(number);
  return formattedNumber;
}

export function _formatNowDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${day} ${months[monthIndex]} ${year}`; // output: "2 May 2023"
}

export function _sortNames(array: any[]) {
  let sortedItems = [...array].sort((a, b) =>
    (a as { name: string }).name.localeCompare((b as { name: string }).name)
  );
  return sortedItems;
}
