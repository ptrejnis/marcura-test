import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[lazyContent]'
})
export class LazyContentDirective<T> {
  constructor(readonly content: TemplateRef<unknown>) {}
}
