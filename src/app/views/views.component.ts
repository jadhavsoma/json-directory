import { Component, OnInit } from '@angular/core';
import { User,User1,User2 } from './user.model';
import { DataService } from './data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-views',
  templateUrl: './dashboard.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit{
  public errorMsg;
  postData:string;
  users: User[];
  users1: User1[];
  name: string ='';
  age:number;
  found:boolean;
  objposts:any[];
constructor(private dataService: DataService){}


  ngOnInit(){
   
    
    this.dataService.getUsers()
  .subscribe(
        data=>
        {
          this.users=data,
          error=> this.errorMsg=error
        }
        );
  

  this.dataService.getcomments()
    .subscribe(
      data=>
      {
        this.users1=data;
      }

    );

    this.objposts=[];
    this.dataService.post()
    .subscribe
    (
      (data:any)=>
      {
        /*let evilr=Object.keys(data); 
        let evilrProper=[];
        for (let prop of evilr) {
          evilrProper.push(data[prop]);
        }
        this.objposts=evilrProper;*/
        console.log(data);  
        //alert(this.arr.push(data));
        this.objposts=data;
        alert(JSON.stringify(this.objposts));
        $('#Username').text(data.Username);
        $('#UserfullName').text(data.UserfullName);
        var companyname;
        localStorage.setItem(companyname, data.companyname);

      }
    )  

  }
  
    
}