"use client"
import { useEffect } from "react";

type PostProps = {
  userId: number,
  id: number,
  title: string,
  body: string
}

function Page() {

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will be unmount')
    }
  }, []);
  // # notice the empty array here, this is optional

  return (
    <div>
      post list
    </div>
  )
}

export default Page;

// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

// export const getStaticProps: GetStaticProps = async (context) => {}

// export const getStaticPaths: GetStaticPaths = async () => {}

// export const getServerSideProps: GetServerSideProps = async (context) => {}