import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Note } from '../../types';
import { NOTES_CONFIG, NotesConfig } from '../../providers';
import { NotesFormFacade } from '../../facades';

@Component({
  selector: 'notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NotesFormFacade]
})
export class NotesComponent implements OnInit {
  @Input() notes: Note[] = [];

  dateFormat = this._config.dateFormat;
  form: FormGroup;

  get notesExists(): boolean {
    return Boolean(this.notes?.length);
  }

  constructor(
    @Inject(NOTES_CONFIG) private readonly _config: NotesConfig,
    private readonly _formFacade: NotesFormFacade
  ) {}

  ngOnInit() {
    this.form = this._formFacade.form;
  }
}
