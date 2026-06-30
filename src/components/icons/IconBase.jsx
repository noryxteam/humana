import { forwardRef } from 'react';
import { ICON_SIZE, ICON_STROKE } from './constants';

export function createLucideIcon(LucideComponent, displayName) {
  const Icon = forwardRef(function HumanaLucideIcon(
    {
      size = ICON_SIZE.md,
      strokeWidth = ICON_STROKE,
      className = '',
      ...rest
    },
    ref
  ) {
    return (
      <LucideComponent
        ref={ref}
        size={size}
        strokeWidth={strokeWidth}
        className={`humana-icon ${className}`.trim()}
        aria-hidden={rest['aria-label'] ? undefined : true}
        {...rest}
      />
    );
  });

  Icon.displayName = displayName;
  return Icon;
}

export function createBrandIcon(BrandComponent, displayName) {
  const Icon = forwardRef(function HumanaBrandIcon(
    { size = ICON_SIZE.md, className = '', ...rest },
    ref
  ) {
    return (
      <BrandComponent
        ref={ref}
        size={size}
        className={`humana-icon humana-icon--brand ${className}`.trim()}
        aria-hidden={rest['aria-label'] ? undefined : true}
        {...rest}
      />
    );
  });

  Icon.displayName = displayName;
  return Icon;
}
