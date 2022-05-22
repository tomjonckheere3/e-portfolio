import CoverImage from "./cover-image";
import Date from "./date";
import contentStyles from './content-styles.module.css'

export default function PostBody({ title, coverImage, date, content }) {
    return (
        <div className="lg:px-4">
            <div className="lg:mt-12 ">
                <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                    {title}
                </h1>
            </div>
            <div className="flex-shrink-0 mt-6 lg:mt-12 mb-4">
                <CoverImage title={title} imageUrl={coverImage?.url} />
            </div>
            <div className="mb-4">
                <Date dateString={date} bold={true} />
            </div>
            <div className={`${contentStyles.content}`} dangerouslySetInnerHTML={{ __html: content?.html }} />
        </div>
    )
}