import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { PostBody } from '../components/PostBody'
import { getPostBySlug, getAllPosts } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import type PostType from '../interfaces/post'

type Props = {
    post: PostType
    morePosts: PostType[]
    preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <div>
            {router.isFallback ? (
                <div>Loading…</div>
            ) : (
                <PostBody content={post.content} />
            )}
        </div>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'content',
        'slug'
    ])

    console.log("post => ", post);
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])
    console.log("posts => ", posts)

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}