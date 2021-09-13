import { HttpEvent, HttpRequest, HttpInterceptor, HttpHandler } from "@angular/common/http";
import { Observable, throwError as observableThrowError} from "rxjs";
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler 
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': 'f26c828dbfmshed39bc123f58076p11f382jsnfbb6d12cae48',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                },
                setParams: {
                   key: '5c121ef3210d4b0ea92603fe3a6a975b' 
                }
        });
        return next.handle(req);
        
    }
}

// this api key came from  siging up here https://rawg.io/apidocs
//5c121ef3210d4b0ea92603fe3a6a975b



// this info from rapiapi.com

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://rawg-video-games-database.p.rapidapi.com/games/%7Bgame_pk%7D',
//   headers: {
//     'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
//     'x-rapidapi-key': 'f26c828dbfmshed39bc123f58076p11f382jsnfbb6d12cae48'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });