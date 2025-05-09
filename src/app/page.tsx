import Image from 'next/image';
import { HeaderNavbar, HomeSearchForm } from './components';

export default function Home() {
  return (
    <div className="p-4 sm:p-10 flex flex-col">
      <div className="flex flex-row-reverse relative z-10">
        <HeaderNavbar />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center min-h-screen w-screen absolute top-0 right-0 bg-white px-4">
        <Image src="/logo-big.jpg" width={400} height={122} alt="FE26" />
        <HomeSearchForm />
        <div className="text-center">
          ما میخواهیم <br /> <span className="text-yellow-500">فضایی</span>{' '}
          بسازیم که تمام{' '}
          <span className="text-red-500">ضینفعان صنعت فولاد کشور،</span> در
          آرامش کامل
          <br /> با مناسب ترین قیمت و آسان ترین روش ممکن ،{' '}
          <span className="text-green-500">خدمات</span> مورد نیازشان را دریافت
          نمایند
        </div>
      </div>
    </div>
  );
}
