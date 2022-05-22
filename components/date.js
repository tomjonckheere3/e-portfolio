import { parseISO, format } from 'date-fns'

export default function Date({ dateString, bold = false }) {
  const date = parseISO(dateString)
  return <time className={`${bold ? "font-bold" : null}`} dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}
