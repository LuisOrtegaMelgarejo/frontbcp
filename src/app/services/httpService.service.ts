import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable()
export abstract class HttpService {

    url = 'http://localhost:8080';
    http: HttpClient;
    
    constructor(http: HttpClient) {
        this.http = http
    }

}