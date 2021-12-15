import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ExchangeService } from './services/exchange.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  amount: string = '';
  originCurrency: string = '';
  targetCurrency: string = '';
  response: string = '';

  constructor(private exchangeService: ExchangeService, private tokenService: TokenService) { }
  
  async generateJWT() {
    this.tokenService.loadJWT();
  }


  async calculateExchange() {
    if ( !this.amount || !this.originCurrency || !this.targetCurrency ) return;
    try{
      const response = await this.exchangeService.getExchangeAmount({ amount: this.amount, originCurrency: this.originCurrency, targetCurrency: this.targetCurrency });
      this.response = JSON.stringify(response);
    } catch (err) {
      this.response = JSON.stringify(err);
    } 
  }
}
