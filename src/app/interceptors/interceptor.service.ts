import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error('Method not implemented.');
    
    //console.log("Pasó por el interceptor: ");

    const headers = new HttpHeaders({
      "token-usuario": "ABC1290381902ALKSDJ1902"
    });

    const reqClone = req.clone({
      headers

    });
    
    return next.handle(reqClone);
    
  }

}

