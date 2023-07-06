type PostProps= {
  userId: number,
  id: number,
  title: string,
  body: string
}


function Page({ posts }: { posts: PostProps }) {
  return(
    <div>
      Post detail
    </div>
  )
}

export default Page;