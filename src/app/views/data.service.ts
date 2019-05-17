import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders  } from '@angular/common/http';
import * as $ from 'jquery';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private docArcController: string='https://mporticonew.topsource.in/Portico/46647da886cce57970ee9d44a783f447';
  private docArcLoginController: string='https://mporticonew.topsource.in/Portico/47311dc5b18c35e6ee30e69160c074c8';
  private logOutController: string='https://mporticonew.topsource.in/Portico/c7af984a6a4891e7609bf77544317a77';

  constructor(private http: HttpClient) { }

  getLoginDetail(): Observable <any>{
  
    var srcToken1 = localStorage.getItem("accessToken");
    var srcToken2 = localStorage.getItem("srcToken");
    let body = new HttpParams();
    body =body.set('accessToken',srcToken1);
    body =body.set('srcToken',srcToken2);
    
    const mheader=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
   // headers.append('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
    return this.http.post<any>(this.docArcLoginController,body,{headers:mheader})
  }

  //get menulist 
  getMenu(): Observable <any>{
    // Get saved data from sessionStorage
    var access_token = localStorage.getItem("access_token");
    sessionStorage.setItem('sessionToken',access_token);
    var session_token = sessionStorage.getItem('sessionToken');
    //alert('session_token- '+session_token);
    var selectedCompany=localStorage.getItem("selectedCompany");
    let body = new HttpParams();
    body =body.set('session_token',session_token);
    body =body.set('section','menu');
    body =body.set('cname',selectedCompany);
    
    const mheader=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
   // headers.append('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
    return this.http.post<any>(this.docArcController,body,{headers:mheader})
  }

  //get company list
  getCompany(): Observable <any>{
    // Get saved data from sessionStorage
    var session_token = sessionStorage.getItem('sessionToken');
    var selectedCompany=localStorage.getItem("selectedCompany");
    var fromdate= $('#fromdate').val();
    var todate= $('#todate').val();
    var venue= $('#sortedby_venue option:selected').val();
    let body = new HttpParams();
    body =body.set('session_token',session_token);
    body =body.set('section','dashboard');
    body =body.set('cname',selectedCompany);
    body =body.set('fromdate',fromdate);
    body =body.set('todate',todate);
    body =body.set('venue',venue);

    const mheader=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<any>(this.docArcController,body,{headers:mheader})
  }


  //getInvoiceListAction
  getInvoiceList(invstatus,pageno): Observable <any>{
    // Get saved data from sessionStorage
    var session_token = sessionStorage.getItem('sessionToken');
    var selectedCompany=localStorage.getItem("selectedCompany");
    let invoiceListData = new HttpParams();
    invoiceListData =invoiceListData.set('session_token',session_token);
    invoiceListData =invoiceListData.set('section','invoicelist');
    invoiceListData =invoiceListData.set('cname',selectedCompany);
    invoiceListData =invoiceListData.set('invstatus',invstatus);
    invoiceListData =invoiceListData.set('pageno',pageno);
    //invoiceListData =invoiceListData.set('S1',val1+'#'+input1);
    
    const mheader=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<any>(this.docArcController,invoiceListData,{headers:mheader})
  }

  //invoiceDetails
  invoiceDetails(invstatus,uid): Observable <any>{
    // Get saved data from sessionStorage
    var session_token = sessionStorage.getItem('sessionToken');
    var selectedCompany=localStorage.getItem("selectedCompany");
    let invoiceListData = new HttpParams();
    invoiceListData =invoiceListData.set('session_token',session_token);
    invoiceListData =invoiceListData.set('section','invoicedetails');
    invoiceListData =invoiceListData.set('cname',selectedCompany);
    invoiceListData =invoiceListData.set('invstatus',invstatus);
    invoiceListData =invoiceListData.set('uid',uid);
    
    const mheader=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<any>(this.docArcController,invoiceListData,{headers:mheader})
  }


 //getLogout
 getLogout(): Observable <any>{
  // Get saved data from sessionStorage
  var session_token = sessionStorage.getItem('sessionToken');
  var selectedCompany=localStorage.getItem("selectedCompany");
  let invoiceListData = new HttpParams();
  invoiceListData =invoiceListData.set('session_token',session_token);
  
  const mheader=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  return this.http.post<any>(this.logOutController,invoiceListData,{headers:mheader})
}




}


