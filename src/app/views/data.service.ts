import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { User, User1,User2 } from './user.model';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders  } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



@Injectable({
  providedIn: 'root'
})
export class DataService {
	
  private apiUrl: string='https://jsonplaceholder.typicode.com/users';
  private apiUrl1: string='assets/data/userdata.json';
  private apiUrl2: string='https://mporticonew.topsource.in/Portico/LoginController';
  //assets/data/userdata.json
  //https://yourportico.com/porticoadmin/validateCompany

  constructor(private http: HttpClient) { }
    
  getUsers(): Observable<User[]>{
  return this.http.get<User[]>(this.apiUrl);
  }
  
  getcomments(): Observable<User1[]>{
    let params1=new HttpParams().set('Company','tops');
    return this.http.get<User1[]>(this.apiUrl1,{params:params1});
    }
  

  post(): Observable <any>{
    
    let body = new HttpParams();
    body =body.set('company','topsabctest1');
    body =body.set('username','fiona');
    body = body.set('password','3ad21min');
    body =body.set('device_imei_id','34534434636v3');
    body = body.set('device_key','wr343243525');
    body =body.set('apiaccesskey','699b9fe55415ae863a2003184744e7b0');
    body =body.set('mobileosname','Android');
    
    
    const mheader=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
   // headers.append('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
    return this.http.post<any>(this.apiUrl2,body,{headers:mheader})
  }


}
