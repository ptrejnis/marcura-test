import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[lazyContent]'
})
export class LazyContentDirective {
  constructor(public readonly content: TemplateRef<unknown>) {}
}
