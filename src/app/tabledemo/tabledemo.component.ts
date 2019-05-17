import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table/lib/data-source/local/local.data-source';
import { DataService } from '../views/data.service';



@Component({
  selector: 'app-tabledemo',
  templateUrl: './tabledemo.component.html',
  styleUrls: ['./tabledemo.component.css']
})
export class TabledemoComponent implements OnInit {


  settings = {
    actions:{
      add:false,
      edit:true,
      delete:false,
      position:'right',
      columnTitle:''
    },
    // hideSubHeader: true,
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      label: {
        title: 'Filter Label'
      },
      value: {
        title: 'Filter Value',
        editable:false
      },
      email: {
        title: 'Email'
      }
    }
  };
  
  
  source: LocalDataSource;
  constructor(protected service: DataService) {
    
}



  ngOnInit() {
    
    // this.source = new LocalDataSource();
    // this.service.loadData().then((data) => {
    //   var mydata=data[0].invoiceDetails;
    //   this.source.load(mydata);
    // });

    this.service.invoiceDetails('Pending','33933')
    .subscribe(
      (data)=>
      {
        //alert(JSON.stringify(data));
        this.source=data.invoiceDetails;

        this.source = new LocalDataSource(data.invoiceDetails);
      }
    );

 }


  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'value',
        search: query
      }
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
  
 
}