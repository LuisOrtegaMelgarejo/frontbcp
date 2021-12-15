import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppInputComponent } from './input/app-input.component';
import { ExchangeService } from './services/exchange.service';
import { TokenService } from './services/token.service';
import { TokenHttpInterceptor } from './interceptor/tokenHttpInterceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AppInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenHttpInterceptor, multi: true },
    ExchangeService,
    TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
