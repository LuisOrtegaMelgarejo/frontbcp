import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent }
  from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenHttpInterceptor implements HttpInterceptor {
  
  private jwt$: Observable<string> | undefined;
  private jwt = '';

  constructor(private tokenService: TokenService) {
  }
  

  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
    
    this.jwt$ = this.tokenService.getJWTObservable();
    this.jwt$.subscribe(jwt => this.jwt = jwt );

    if (req.url.includes('jwt')) return next.handle(req);
    const httpReq = req.clone({
      url: req.url,
      headers: req.headers.append("Authorization","Bearer "+this.jwt)
    });
    return next.handle(httpReq);
  }
}