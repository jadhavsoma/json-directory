import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { DataService } from './data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-views',
  templateUrl: './dashboard.html',
  styleUrls: ['./views.component.css']
})

export class ViewsComponent implements OnInit{

  constructor(private dataService: DataService,protected localStorage: LocalStorage){}
  fromdate: Date;
  todate: Date;
  public compList;


  ngOnInit(){
  
    this.fromdate = new Date();
    this.todate = new Date();
    this.myDashboard();
  }

//get company list
myDashboard(){
 this.dataService.getCompany()
 .subscribe(
   (data)=>
   {
     //alert(JSON.stringify(data));
     //this.compList=data.companyList;
     $('#fromdate').val(data.fromDate);
     $('#todate').val(data.toDate);
      try{
      $('#sortedby_venue').children('option:not(:first)').remove();
      $.each(data.venueList, function (index, item) {
      $('#sortedby_venue').append($('<option>').text(item.description).attr('value', item.description))					
      });
      //$('#sortedby_venue').val(data.seletcedVenue);          
      }catch(e){}
   
     if(data.actionType=='docflow')
     {
       $('.docflowaData').show();
       $('.stoargeData').hide();
     try{     
     $("#last30DaysStatusList").children().remove();
     $('#last30DaysStatusList').append('<tr><td bgcolor="#b5cee7" colspan="2" style="padding:3px;"><strong>'+data.last30DaysStatusTitle+'</strong> <span style="padding-left:20px;font-weight:bold">All: '+data.last30DaysAll+'</span></td></tr>');
     $.each(data.last30DaysStatusList, function(idx, item) {
       $.each(item, function(idx, item) {
       $('#last30DaysStatusList').append('<tr><td style="width:20%;padding:3px;">'+idx+'</td><td style="padding:3px;">'+item+'</td></tr>');
       });
     });
    
   $("table#last30DaysStatusList tr:even").css("background-color", "#e3f2d3");

   $('#graphTotalCount').text(data.graphTotalCount);
   }catch(e){}
   try{
   $('#documentCategoryByVenueLabel').text(data.documentCategoryByVenueLabel);
   if(data.documentCategoryByVenueTotal!=0)
   {
     var $tr = $('#docCatCountVenue');
     $('#docCatCountVenue').find('tr:not(:first)').remove();
     $.each(data.documentCategoryByVenue, function(idx, item) {
       $tr.append('<tr><td><strong>' + item.venue + '</strong></td>' + '<td>' + item.category + '</td>' + '<td>' + item.count + '</td></tr>');
     });
     $('#docCatCountVenue').show();
     $('#docCatCountVenueNoData').hide();
   }
   else
   {
     $('#docCatCountVenue').hide();
     $('#docCatCountVenueNoData').text(data.documentCategoryByVenueMsg);
     $('#docCatCountVenueNoData').show();
   }
   }catch(e){}
   $("table#docCatCountVenue tr:even").css("background-color", "#e3f2d3");
  }

   if(data.actionType=='storage')
   {
     $('.docflowaData').hide();
     $('.stoargeData').show();
     try{
     if(data.showAddButton=='Y'){$('.showAddButton').show();}else{$('.showAddButton').hide();}
     if(data.showListButton=='Y'){$('.showListButton').show();}else{$('.showListButton').hide();}
     }catch(e){}

     if(data.showGraph=='N')
     {
       $('.tblDataStorage').show();
       $('.graphDataStorage').hide();
       
       $('#supplierByYearLabel').text(data.supplierByYearLabel);
       $('#supplierByVenueLabel').text(data.supplierByVenueLabel);
       try{ //storage supplier category by Year
         if(data.supplierByYearTotal!=0)
         {
           var $tr = $('#supplierByYear');
           $('#supplierByYear').find('tr:not(:first)').remove();
           $.each(data.supplierByYear, function(idx, item) {
             $tr.append('<tr><td><strong>' + item.venue + '</strong></td>' + '<td>' + item.category + '</td>' + '<td>' + item.count + '</td></tr>');
           });
           $('#supplierByYear').show();
           $('#supplierByYearNoData').hide();
         }
         else
         {
           $('#supplierByYear').hide();
           $('#supplierByYearNoData').text(data.supplierByYearMsg);
           $('#supplierByYearNoData').show();
         }
       }catch(e){}
       try{ //storage supplier category by venue
         if(data.supplierByVenueTotal!=0)
         {
           var $tr = $('#supplierByVenue');
           $('#supplierByVenue').find('tr:not(:first)').remove();
           $.each(data.supplierByVenue, function(idx, item) {
             $tr.append('<tr><td><strong>' + item.venue + '</strong></td>' + '<td>' + item.supplierName + '</td>' + '<td>' + item.count + '</td></tr>');
           });
           $('#supplierByVenue').show();
           $('#supplierByVenueNoData').hide();
         }
         else
         {
           $('#supplierByVenue').hide();
           $('#supplierByVenueNoData').text(data.supplierByVenueMsg);
           $('#supplierByVenueNoData').show();
         }
       }catch(e){}
     }
     else
     {
       $('.tblDataStorage').hide();
       $('.graphDataStorage').show();
     

       $('#stgraphTotalCount').text(data.graphTotalCount);
       $('#graphHeading').text(data.graphHeading);
       $('#titleLastHeading').text(data.titleLastHeading);
     try{
         if(data.graphResult!=0)
         {
         $('#storageGraph').empty();
         $('#storageGraph').show();
         $('#storageGraphNoData').hide();
         }
           else
             {
               $('#storageGraph').hide();
               $('#storageGraphNoData').text(data.graphMsg);
               $('#storageGraphNoData').show();
             }
         }catch(e){}
         try{
           if(data.totalLastCount!=0)
           {	
           $('#last_list_view').show();
           $('.noTotalLastCount').hide();
           $('#last_list_view').children().remove('li');
           $.each((data.titleLastList).slice(0,4), function(idx, item) { 
             $("li:odd").css("background-color", "#e3f2d3");
             $('#last_list_view').append('<li><div style="width:90%;display:inline-block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size:0.95em;"><em style="color:#333;font-weight:normal;">' + item.createdDate + '</em> - ' +item.filename + '</div></li>');
           });
           $('#last_list_view').listview('refresh');
           }
           else
           {
             $('#last_list_view').hide();
             $('.noTotalLastCount').show();
             $('.noTotalLastCount').text(data.titleLastMsg);
           }
           
         } catch (e) {}
     }
   }
   $('#overlay_login').hide();  
   });

  }
  
    
}