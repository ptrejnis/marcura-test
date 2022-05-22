import { InjectionToken } from '@angular/core';

export interface NotesConfig {
  dateFormat: string;
}

export const NOTES_CONFIG = new InjectionToken<NotesConfig>('notes.config', {
  providedIn: 'root',
  factory: () => ({
    dateFormat: 'd LLL yyyy h:mm'
  })
});
