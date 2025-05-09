'use client';

import { Icon, Search } from '@/icons';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

export const HomeSearchForm = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col gap-10 justify-center items-center w-full"
    >
      <div className="bg-gray-100 border-gray-300 border w-full max-w-[800px] h-[40px] rounded-full flex items-center px-4">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="محصول موردنظر را جستجو کنید"
          className="grow outline-0 border-0 h-full"
        />
        <div className="cursor-pointer hover:text-blue-500">
          <Icon
            icon={Search as React.FunctionComponent}
            props={{ className: 'size-5' }}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 w-full">
        <button
          type="submit"
          className="w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-2 bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 rounded-xl cursor-pointer text-center"
        >
          <Icon icon={Search as React.FunctionComponent} />
          جستجو
        </button>

        <button
          type="button"
          className="w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-2 bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 text-white rounded-xl cursor-pointer text-center"
        >
          قیمت روز
        </button>
      </div>
    </form>
  );
};
