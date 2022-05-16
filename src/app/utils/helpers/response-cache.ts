import { Observable, shareReplay } from 'rxjs';

import { Maybe } from '@utils/types';

export abstract class ResponseCache<T> {
    private _source$: Maybe<Observable<T>>;

    getCachedOrMakeRequest(...args: unknown[]): Observable<T> {
        if (!this._source$) {
            this._source$ = this.fetch(...args).pipe(shareReplay(1));
        }

        return this._source$;
    }

    protected abstract fetch(...args: unknown[]): Observable<T>;
}
