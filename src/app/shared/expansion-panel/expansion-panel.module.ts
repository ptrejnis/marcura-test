import { NgModule } from '@angular/core';
import { ExpansionPanelComponent } from './components';
import { CommonModule } from '@angular/common';
import { LazyContentModule } from '@shared/lazy-content';
import { ExpansionPanelDirective } from './directives';

@NgModule({
  declarations: [ExpansionPanelComponent, ExpansionPanelDirective],
  imports: [CommonModule, LazyContentModule],
  exports: [ExpansionPanelComponent, ExpansionPanelDirective, LazyContentModule]
})
export class ExpansionPanelModule {}
