import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class NotesFormFacade {
  form: FormGroup = this._fb.group({
    commentType: [null],
    comment: [{ value: null, disable: true }]
  });
  constructor(private readonly _fb: FormBuilder) {}
}
