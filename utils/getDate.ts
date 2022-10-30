export const getDate = (date: string) => {
  const monthDay = date.slice(4)
  return `${monthDay.slice(0, 2)}/${monthDay.slice(2)}`
}
