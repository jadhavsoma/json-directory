import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(){}
  
  
  ngOnInit(){
  //return this.dataService.getUsers().subscribe(data=> this.users$=data);
  
  var companyname=localStorage.getItem(companyname);
  $('#companyname').text(companyname);
  }
}