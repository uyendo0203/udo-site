import Image from 'next/image'
import { Suspense } from 'react';


import HomeSection1 from 'components/home/section-1';
import HomeSection2 from 'components/home/section-2';
import HomeSection3 from 'components/home/section-3';
import HomeSection4 from 'components/home/section-4';
import HomeSection5 from 'components/home/section-5';
import HomeSection6 from 'components/home/section-6';


export default function Page() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<p>Loading home page...</p>}>
        {/* <HomeSection1 /> */}
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection5 />
        <HomeSection4 />
        <HomeSection6 />
      </Suspense>
    </main>
  )
}
