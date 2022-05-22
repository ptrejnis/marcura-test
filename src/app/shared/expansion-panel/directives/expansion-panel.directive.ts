import { Directive, HostListener, Input } from '@angular/core';
import { ExpansionPanelComponent } from '../components';

@Directive({
  selector: '[expansionPanel]'
})
export class ExpansionPanelDirective {
  @Input() expansionPanel: ExpansionPanelComponent;

  @HostListener('click')
  clickHandler() {
    this.expansionPanel.toggle();
  }
}
