import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Note } from '../../types';
import { NOTES_CONFIG, NotesConfig } from '../../providers';

@Component({
  selector: 'notes',
  templateUrl: 'notes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent {
  @Input() notes: Note[] = [];

  dateFormat = this._config.dateFormat;
  form: FormGroup;

  get notesExists(): boolean {
    return Boolean(this.notes?.length);
  }

  constructor(@Inject(NOTES_CONFIG) private readonly _config: NotesConfig) {}
}
