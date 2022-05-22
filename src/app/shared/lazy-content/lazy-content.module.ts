import { NgModule } from '@angular/core';

import { LazyContentDirective } from './lazy-content.directive';

@NgModule({
  declarations: [LazyContentDirective],
  exports: [LazyContentDirective]
})
export class LazyContentModule {}
