import { Observable, shareReplay } from 'rxjs';

export abstract class ResponseCache<T> {
    private _source$: Observable<T>;

    getCachedOrMakeRequest(...args: unknown[]): Observable<T> {
        if (!this._source$) {
            this._source$ = this.fetch(...args).pipe(shareReplay(1));
        }

        return this._source$;
    }

    protected abstract fetch(...args: unknown[]): Observable<T>;
}
