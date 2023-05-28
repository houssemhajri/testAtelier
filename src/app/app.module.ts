import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppServicesService } from '../Core/Services/app-services.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './home/details/details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
