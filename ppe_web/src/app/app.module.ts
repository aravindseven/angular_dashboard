import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxLoadingModule } from 'ngx-loading';
import { ListvideosComponent } from './listvideos/listvideos.component';
import {WebcamModule} from 'ngx-webcam';
import { PpedetectionstreamComponent } from './ppedetectionstream/ppedetectionstream.component';


@NgModule({
  declarations: [
    AppComponent,
    ListvideosComponent,
    PpedetectionstreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    ChartModule,
    HttpClientModule,
    FormsModule,
    WebcamModule,
    NgxPaginationModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
