import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 min-h-[80vh]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Page Not Found</p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">We are already working to solve the problem. </p>
        </div>
      </div>
    </section>

  );
}

{/* <div className='flex flex-col justify-center items-center min-h-[80vh]'>
<h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
<p className='text-center my-5'>
  Maybe you misspelled the link. <br/> Maybe something existed here, or it
  didn&apos;t exist in the first place...
</p>
<Link className='font-bold cursor-pointer' href='/'>
  Go Home
</Link>
</div> */}