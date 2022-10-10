
import Post from '../interfaces/post';
import { getAllPosts } from '../lib/api';
import { PostLink } from "../components/PostLink";

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <div>
      {
        allPosts.map((post) => (
          <PostLink
            key={post.slug}
            title={post.title}
            slug={post.slug}
          />
        ))
      }
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
  ])

  return {
    props: { allPosts },
  }
}