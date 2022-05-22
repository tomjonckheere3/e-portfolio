import Head from 'next/head'
import ProjectPreview from '../components/project-preview'
import { getAllProjects } from "../lib/graphcms"

export default function Projects({ projects }) {
    return (
        <div className="space-y-14 lg:space-y-24">
            <Head>
                <title>Tom Jonckheere - Projects</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 
            </Head>

            <main className="max-w-4xl mx-auto mt-8 md:mt-16 antialiased">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8">
                    {projects.map((project) => (
                        <ProjectPreview
                            key={project.url}
                            excerpt={project.excerpt}
                            title={project.title}
                            url={project.url}
                            coverImage={project.coverImage}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const projects = (await getAllProjects()) || []
    return {
        props: {
            projects
        }
    }
}