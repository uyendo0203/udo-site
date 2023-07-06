import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
interface Person {
  name: string;
}
interface StarWarsPersonProps {
  person: Person;
}
const Page = ({ person }: StarWarsPersonProps) => {

  console.log(222, { person });
    return <div>star war Page</div>;
};
export const getStaticProps: GetStaticProps = async (context) => {
  // const { pid } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const person = await res.json();
  console.log(111, { person });


  return {
    props: {
      person,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from({ length: 10 }, (_, index) => ({
    params: {
      pid: (index + 1).toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export default Page;
