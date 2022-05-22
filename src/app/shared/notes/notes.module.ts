import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NotesComponent]
})
export class NotesModule {}
