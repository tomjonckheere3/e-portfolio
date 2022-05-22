import Image from 'next/image'

export default function CoverImage({ title, imageUrl }) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={imageUrl}
    />
  )

  return (
    <div className="sm:mx-0">
          <a aria-label={title}>{image}</a>
    </div>
  )
}
