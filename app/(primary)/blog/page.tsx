import Link from 'next/link';

export default function Page() {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen py-[5rem]">
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white text-center">Articles</h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {
            [1, 2, 3, 4].map((item, index) => {
              return (
                <>
                  <article className="max-w-xs">
                    <Link href="/blog/1">
                      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1" />
                    </Link>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <Link href="/blog/1">Our first office</Link>
                    </h2>
                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <Link href="/blog/1" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                      Read in 2 minutes
                    </Link>
                  </article>
                  <article className="max-w-xs">
                    <Link href="/blog/1">
                      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2" />
                    </Link>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <Link href="/blog/1">Enterprise design tips</Link>
                    </h2>
                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <Link href="/blog/1" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                      Read in 12 minutes
                    </Link>
                  </article>
                  <article className="max-w-xs">
                    <Link href="/blog/1">
                      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3" />
                    </Link>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <Link href="/blog/1">We partnered with Google</Link>
                    </h2>
                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <Link href="/blog/1" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                      Read in 8 minutes
                    </Link>
                  </article>
                  <article className="max-w-xs">
                    <Link href="/blog/1">
                      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4" />
                    </Link>
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <Link href="/blog/1">Our first project with React</Link>
                    </h2>
                    <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
                    <Link href="/blog/1" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                      Read in 4 minutes
                    </Link>
                  </article>
                </>
              )
            })
          }

        </div>
      </div>
    </section>
  );
}