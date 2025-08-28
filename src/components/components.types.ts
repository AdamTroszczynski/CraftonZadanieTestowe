export type Colors =
  | 'primary'
  | 'primary-hovered'
  | 'primary-clicked'
  | 'text'
  | 'text-on-dark'
  | 'dark'
  | 'white'
  | 'surface-subtle'
  | 'surface-alt'
  | 'surface-inner-dark'
  | 'surface-light'
  | 'surface-medium'
  | 'stroke'
  | 'stroke-light'
  | 'stroke-subtle'
  | 'stroke-on-dark'
  | 'icon-stroke-on-dark'
  | 'section-soft-fade';

export type IconNames = 'menu' | 'arrow' | 'navArrow' | 'location' | 'slideArrow';

export const iconColorsMap: Record<Colors, string> = {
  primary: 'fill-primary',
  'primary-hovered': 'fill-primary-hovered',
  'primary-clicked': 'fill-primary-clicked',
  text: 'fill-text',
  'text-on-dark': 'fill-text-on-dark',
  dark: 'fill-dark',
  white: 'fill-white',
  'surface-subtle': 'fill-surface-subtle',
  'surface-alt': 'fill-surface-alt',
  'surface-inner-dark': 'fill-surface-inner-dark',
  'surface-light': 'fill-surface-light',
  'surface-medium': 'fill-surface-medium',
  stroke: 'fill-stroke',
  'stroke-light': 'fill-stroke-light',
  'stroke-subtle': 'fill-stroke-subtle',
  'stroke-on-dark': 'fill-stroke-on-dark',
  'icon-stroke-on-dark': 'fill-icon-stroke-on-dark',
  'section-soft-fade': 'fill-section-soft-fade',
};
