import { Injectable } from  '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpService } from  './httpService.service';

@Injectable()
export class TokenService  extends HttpService  {

    private jwt$ = new Subject<string>();

    async getJWT(): Promise<any> {
        try{
            const result = await this.http.post(this.url.concat('/login'),{username: "bcp",password:"password"},{observe: 'response'}).toPromise();
            return Promise.resolve(result)
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async loadJWT(): Promise<void> {
        const jwt = await this.getJWT();
        const token = jwt.headers.get('Authorization');
        this.jwt$.next(token.substr(8));
    }

    getJWTObservable(): Observable<string> {
        return this.jwt$.asObservable();
    }
    
}