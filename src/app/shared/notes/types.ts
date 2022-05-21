export interface Note {
  id: number;
  daStage: string;
  persona: string;
  author: string;
  comment: string;
  type: NoteType;
  date: Date;
}

enum NoteType {
  Internal = 'Internal',
  External = 'External'
}
