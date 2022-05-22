import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostBinding,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LazyContentDirective } from '@shared/lazy-content';
import { expansionAnimation } from '../animations';

type ExpansionPanelState = 'EXPANDED' | 'CLOSED';

@Component({
  selector: 'expansion-panel',
  templateUrl: 'expansion-panel.component.html',
  styleUrls: ['expansion-panel.component.scss'],
  animations: [expansionAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'expansionPanel'
})
export class ExpansionPanelComponent {
  state$ = new BehaviorSubject<ExpansionPanelState>('CLOSED');

  @ContentChild(LazyContentDirective, { static: true }) lazyContent?: LazyContentDirective;
  @ViewChild(TemplateRef, { static: true }) eagerContent: TemplateRef<unknown>;
  @HostBinding('@expansionAnimation')
  get expansionAnimation() {
    return { value: this.state$.getValue() };
  }

  get content(): TemplateRef<unknown> | null {
    if (this.lazyContent?.content) {
      return this.isCollapsed ? this.lazyContent.content : null;
    }
    return this.eagerContent;
  }

  get isCollapsed(): boolean {
    return this.state$.getValue() === 'EXPANDED';
  }

  get isClosed(): boolean {
    return this.state$.getValue() === 'CLOSED';
  }

  constructor(private readonly _cdRef: ChangeDetectorRef) {}

  toggle(): void {
    this.isCollapsed ? this.close() : this.expand();
  }

  expand(): void {
    this.state$.next('EXPANDED');
    this._cdRef.markForCheck();
  }

  close(): void {
    this.state$.next('CLOSED');
    this._cdRef.markForCheck();
  }
}
