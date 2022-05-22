import CoverImage from './cover-image'
import Link from 'next/link'

export default function ProjectPreview({ title, excerpt, url, coverImage }) {
    return (
        <Link href={url}>
            <div className="mb-10 rounded overflow-hidden shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="mb-1">
                    <CoverImage title={title} imageUrl={coverImage.url} />
                </div>
                <div className="px-6 py-4">
                    <h3 className="text-lg font-bold">
                        <p>{title}</p>
                    </h3>
                    <p className="my-4 text-gray-800 dark:text-white">{excerpt}</p>
                </div>
            </div>
        </Link>
    )
}