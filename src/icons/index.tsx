import { createElement } from 'react';
export * from './Search';
export * from './SignIn';
export * from './UserPlus';
export * from './VerticalEllipsis';

export const Icon = ({
  icon,
  props,
}: {
  icon: React.FunctionComponent<React.SVGProps<SVGAElement>>;
  props?: React.SVGProps<SVGAElement>;
}) => {
  return createElement(icon, { className: 'size-4', strokeWidth: 2, ...props });
};
