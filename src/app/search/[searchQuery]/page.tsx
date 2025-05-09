import { HeaderNavbar } from '@/app/components';
import { Icon, Search } from '@/icons';
import Image from 'next/image';
import { use } from 'react';
import { SearchResponseObject } from './components/types';
import { SearchItem } from './components';

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
          <Image width={70} height={70} alt="FE26" src="/logo.jpg" />
        </div>
        <div className="bg-white border border-gray-400 rounded-full h-[36px] w-[300px] flex p-1 text-sm">
          <input
            className="outline-0 border-0 grow h-full px-3"
            placeholder="جستجو"
          />
          <button className="bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 cursor-pointer text-white w-[60px] h-full rounded-full flex items-center justify-center">
            <Icon icon={Search as React.FunctionComponent} />
          </button>
        </div>
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
