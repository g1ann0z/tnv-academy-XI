import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class MenuService {
    private apiUrl = 'https://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti/';
    
    constructor(private http: HttpClient) {}

    getMenu(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}