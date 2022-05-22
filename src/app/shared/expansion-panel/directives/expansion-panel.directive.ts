import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import { ExpansionPanelComponent } from '../components';

@Directive({
  selector: '[expansionPanel]'
})
export class ExpansionPanelDirective {
  @Input() expansionPanel: ExpansionPanelComponent;

  @HostBinding('class.expanded')
  get isClosed() {
    return this.expansionPanel.isClosed;
  }

  @HostListener('click')
  clickHandler() {
    this.expansionPanel.toggle();
  }
}
