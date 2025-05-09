'use client';

import { Icon, Search } from '@/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeaderSearchForm() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(search);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="bg-white border border-gray-400 rounded-full h-[36px] w-[300px] flex p-1 text-sm"
    >
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="outline-0 border-0 grow h-full px-3"
        placeholder="جستجو"
      />
      <button
        type="submit"
        className="bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:cursor-not-allowed cursor-pointer text-white w-[60px] h-full rounded-full flex items-center justify-center"
        disabled={!search}
      >
        <Icon icon={Search as React.FunctionComponent} />
      </button>
    </form>
  );
}
