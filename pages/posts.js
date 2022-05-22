import Head from 'next/head'
import PostPreview from '../components/post-preview'
import { getAllPosts } from '../lib/graphcms'

export default function Posts({ posts }) {
    return (
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>Tom Jonckheere - Blog</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerpolicy="no-referrer" /> 
            </Head>

            <main className="max-w-4xl mx-auto mt-8 md:mt-16 antialiased">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
                    {posts.map((post) => (
                        <PostPreview
                            key={post.slug}
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                            slug={post.slug}
                            excerpt={post.excerpt}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const posts = (await getAllPosts()) || []
    return {
        props: {
            posts
        }
    }
}

