import Link from 'next/link';
import { SearchItemProps } from './types';

export const SearchItem = ({ item }: SearchItemProps) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex text-xs gap-1 text-gray-600">
        <span>www.example.com</span> <span>{'>'}</span> <span>live-price</span>
        <span>{'>'}</span>{' '}
        <Link href="#" className="underline hover:text-black">
          {item.fullLabel.slice(0, 19)}
        </Link>
      </div>
      <Link href="#" className="text-lg text-blue-500 hover:text-blue-700">
        {item.fullLabel}
      </Link>
      <div className="text-gray-600 text-xs">
        <div className="mb-2">
          {`${item.fullLabel.slice(0, 19)} قیمت ${
            item.price
          } تحویل درمحل کارخانه`}
        </div>
        <div className="text-[11px]">{`آخرین بروزرسانی قیمت ${item.date}`}</div>
      </div>
    </div>
  );
};
