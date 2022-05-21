import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[lazyContent]'
})
export class LazyContentDirective {
  constructor(readonly content: TemplateRef<unknown>) {}
}
