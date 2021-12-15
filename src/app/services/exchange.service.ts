import { Injectable } from  '@angular/core';
import { HttpService } from  './httpService.service';

@Injectable()
export class ExchangeService extends HttpService {

    public async getExchangeAmount(body: any): Promise<any> {
        try{
            const response = await this.http.post(this.url.concat('/exchange/calculate'),body).toPromise();
            return Promise.resolve(response);
        } catch (err) {
            console.log(err)
            return Promise.reject(err);
        }
    }

}