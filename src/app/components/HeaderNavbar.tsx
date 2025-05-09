import { Icon, SignIn, UserPlus, VerticalEllipsis } from '@/icons';
import Link from 'next/link';

export const HeaderNavbar = () => {
  return (
    <div className="text-xs flex gap-2 items-center">
      <Link href="#" className="text-gray-600 hover:text-sky-500">
        اشتال
      </Link>
      <div className="border-r border-text-gray-500 h-3"></div>
      <Link href="#" className="text-sky-600">
        سفارش سریع
      </Link>
      <Link href="#" className="text-gray-600 hover:text-sky-500">
        <Icon icon={VerticalEllipsis as React.FunctionComponent} />
      </Link>

      <Link href="#" className="text-gray-600 hover:text-sky-500">
        <Icon
          icon={UserPlus as React.FunctionComponent}
          props={{ className: 'size-5' }}
        />
      </Link>
      <Link href="#" className="text-gray-600 hover:text-sky-500">
        <Icon
          icon={SignIn as React.FunctionComponent}
          props={{ className: 'size-5' }}
        />
      </Link>
    </div>
  );
};
