import { DaStage, Persona } from '@shared/types';

export interface Note {
  id: number;
  daStage: DaStage;
  persona: Persona;
  author: string;
  comment: string;
  type: NoteType;
  date: Date;
}

enum NoteType {
  Internal = 'Internal',
  External = 'External'
}
