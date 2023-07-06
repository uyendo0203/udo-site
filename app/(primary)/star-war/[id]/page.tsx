type PostProps= {
  userId: number,
  id: number,
  title: string,
  body: string
}

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: PostProps[] = await response.json();

  return {
    props: {
      posts,
    },
  }
}

function Page({ posts }: { posts: PostProps }) {
  return(
    <div>
      star war detail
    </div>
  )
}

export default Page;