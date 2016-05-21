import {Injectable} from '@angular/core';
import {Http, Headers, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {UserService} from './userService';

@Injectable()
export class ChatService {
    private _lastTimestamp: Date;
    private _baseApi: string = 'http://localhost:9090/';

    constructor(private _http: Http, private _userService: UserService) {
    }

    public list(): Observable<Array<string>> {
        const userId = this._userService.id;

        const params = new URLSearchParams();
        const lastTimestamp = this._lastTimestamp;
        
        if (lastTimestamp) {
            params.set('timestamp', <string>lastTimestamp.getTime());
        }

        return this._http.get(`${this._baseApi}list/${userId}`, {
            headers: this.createHeaders(),
            search: params
        })
            .map(r => <Array<string>> r.json())
            .do(list => {
                if (!list || list.length === 0) {
                    return;
                }

                this._lastTimestamp = new Date();
            });
    }
    
    public post(message): Observable<Response> {
        const userId = this._userService.id;
        
        return this._http.post(`${this._baseApi}message/${userId}`, JSON.stringify(message), {
            headers: this.createHeaders()
        });
    }

    private createHeaders(): Headers {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }
}
