import { HeaderNavbar } from '@/app/components';
import { Icon, Search } from '@/icons';
import Image from 'next/image';
import React from 'react';

export default function SearchPage() {
  return (
    <div>
      <div className="h-24 bg-gray-200 shadow px-4 sm:px-20 md:px-48 flex items-center justify-between">
        <div className="w-[196px]">
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
    </div>
  );
}
