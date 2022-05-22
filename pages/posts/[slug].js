import Head from 'next/head'
import { useRouter } from "next/router";
import ErrorPage from 'next/error'
import PostBody from "../../components/post-body";
import { getAllPosts, getPost } from "../../lib/graphcms";

export default function Post({ post }) {
    const router = useRouter()

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>Tom Jonckheere - {post?.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerpolicy="no-referrer" /> 
            </Head>

            <main className="max-w-4xl mx-auto mt-8 md:mt-16 antialiased">
                <PostBody
                    title={post?.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    content={post.content}
                />
            </main>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const data = await getPost(params.slug)
  
    return {
      props: {
        post: data.post,
      }
    }
  }
  
  export async function getStaticPaths() {
    const posts = await getAllPosts()
    return {
      paths: posts.map(({ slug }) => ({
        params: { slug },
      })),
      fallback: false,
    }
  }
  