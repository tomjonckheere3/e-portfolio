import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  slug,
}) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="mb-10 rounded overflow-hidden shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="mb-1">
          <CoverImage title={title} imageUrl={coverImage.url} />
        </div>
        <div className="px-6 py-4">
          <div className="mb-1">
            <Date dateString={date} />
          </div>
          <h3 className="text-lg font-bold">
              <p>{title}</p>
          </h3>
        </div>
      </div>
    </Link>
  )
}