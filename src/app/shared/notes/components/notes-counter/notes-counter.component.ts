import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'notes-counter',
  templateUrl: 'notes-counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesCounterComponent {
  @Input() count: number;

  message = faMessage;
}
