import { ApiService } from './services/api.service';
import { User } from "./common/interfaces";
import { PageEvent } from '@angular/material/paginator';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private api: ApiService){}
  
  ngOnInit(){
    this.api.getList().subscribe(datos => this.datos = datos)
  }
  datos: User[]= []
  
  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1 
  }
  
  displayedColumns: string[] = ['id', 'title'];
  page_size: number = 5
  page_number: number = 1
  page_size_options= [5,10,20,50,100]
  
  
}
