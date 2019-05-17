import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {

    //getInvoiceListAction
    // this.dataService.getInvoiceList('All','1')
    // .subscribe(
    //   (data)=>
    //   {
    //     alert(JSON.stringify(data));
    //     try{
    //       $('#totalPending').text(data.totalPending);
    //       $('#totalApproved').text(data.totalApproved);
    //       $('#totalAuthorised').text(data.totalAuthorised);
    //       $('#totalRejected').text(data.totalRejected);
    //       }catch(e){}
  
    //   }
    // );    

    //invoiceDetails
    this.dataService.invoiceDetails('Pending','33933')
    .subscribe(
      (data)=>
      {
        //alert(JSON.stringify(data));
        try{
          var $tbl = $('.tblinvoicedetails');
          //$('.tblinvoicedetails').children().remove();
          $tbl.append('<tr><td colspan="25"><a href="#" onclick="fileDownload()"><img src="img/fileDownload.png" align="absmiddle" alt="" />&nbsp;'+data.fileText+'</a></td></tr>');
          
          $.each(data.invoiceDetails, function(idx, item) {
          
            $('.tbltrcaption').append('<td width="38%" style="border-color:#c6c6c6;padding:2px;"><strong>' + item.label + '</strong></td>');
            $('.tbltrdata').append('<td style="border-color:#c6c6c6;padding:2px;">' + item.value + '</td>');
          });	
          $("table.tblinvoicedetails tr:even").css("background-color", "#e3f2d3");
          $("table.tblinvoicedetails").css("border-bottom", "none");
          }catch(e){}
  
      }
    );







    

  }

}
