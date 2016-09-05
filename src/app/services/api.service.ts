import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

    api_url:string = 'https://api.github.com/';
    
    constructor(private http: Http) { }

    get(path:string):Promise<any>{
        return this.http.get(`${this.api_url}${path}`)
        .toPromise()
        .then(r => r.json())
        .catch(r => r.json());
    }
}