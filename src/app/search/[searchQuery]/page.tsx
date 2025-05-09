import { HeaderNavbar } from '@/app/components';
import Image from 'next/image';
import { use } from 'react';
import { SearchResponseObject } from './components/types';
import { SearchItem } from './components';
import HeaderSearchForm from './components/HeaderSearchForm';
import Link from 'next/link';

export default function SearchPage({
  params,
}: {
  params: Promise<{ searchQuery: string }>;
}) {
  const { searchQuery } = use(params);
  const response = use(
    fetch(`https://mahanman.ir/api/search?search_content=${searchQuery}`)
  );
  const items: { data: SearchResponseObject[] } = use(response.json());

  return (
    <div className="bg-white">
      <div className="bg-gray-200 shadow py-4 px-4 sm:px-20 md:px-48 flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between">
        <div className="lg:w-[196px]">
          <Link href="/" className="cursor-pointer">
            <Image width={70} height={58} alt="FE26" src="/logo.jpg" />
          </Link>
        </div>
        <HeaderSearchForm />
        <HeaderNavbar />
      </div>
      <div className="px-4 sm:px-20 md:px-48 py-8">
        {items.data.map(item => (
          <SearchItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
