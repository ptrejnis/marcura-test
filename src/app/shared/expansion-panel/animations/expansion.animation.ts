import { animate, state, style, transition, trigger } from '@angular/animations';

export const expansionAnimation = trigger('expansionAnimation', [
  state(
    'CLOSED',
    style({
      overflow: 'hidden',
      visibility: 'hidden',
      height: 0
    })
  ),
  state(
    'EXPANDED',
    style({
      overflow: 'visible',
      visibility: 'visible'
    })
  ),
  transition('CLOSED => EXPANDED', animate('150ms ease-in')),
  transition('EXPANDED => CLOSED', animate('150ms ease-out'))
]);
