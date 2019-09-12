import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Add
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from './services/api.service';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
