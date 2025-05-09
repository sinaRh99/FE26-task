import { createElement, JSX } from 'react';
export * from './search';
export * from './SignIn';
export * from './UserPlus';
export * from './VerticalEllipsis';

export const Icon = ({
  icon,
  props,
}: {
  icon: React.FunctionComponent<JSX.ElementAttributesProperty>;
  props: JSX.ElementAttributesProperty;
}) => {
  return createElement(icon, props);
};
