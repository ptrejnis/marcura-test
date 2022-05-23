import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NotesComponent, NotesCounterComponent } from './components';

@NgModule({
  declarations: [NotesComponent, NotesCounterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [NotesComponent, NotesCounterComponent]
})
export class NotesModule {}
