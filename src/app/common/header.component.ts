import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { DataService } from '../views/data.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService,protected localStorage: LocalStorage){}
  
  public menuList;

  ngOnInit(){

  //for login box top
  $(document).ready(function(){
    try{
    var userFullName=localStorage.getItem("userFullName");
    //localStorage.getItem("selectedCompany");
    //$('#companyname').text(compName);
    $('#empname').text(userFullName);
    }catch(e){}

    $('#userprofilename').click(function(event){
    //alert('inn');
      $(this).toggleClass('active');
      $('.wrapper-userprofile .profile_menu_drodown').show();
      event.stopPropagation();
    });	

    $(document).click(function() {
    // all dropdowns
    $('.wrapper-userprofile').removeClass('active');
    $('.wrapper-userprofile .profile_menu_drodown').hide();
    });



    //select company 
    function selCompany(comValue){
      var comVal=$(comValue).val();
      localStorage.setItem("selectedCompany",comVal);
      window.location.reload();
    };
   
});

//get menulist
    this.dataService.getMenu()
    .subscribe(
      (data)=>
      {
        try{
        //alert(JSON.stringify(data));
        this.menuList=data.menuList;
        }catch(e){}
      });

      this.dataService.getCompany()
      .subscribe(
        (data)=>
        {
          try{
            $('#companylist').children().remove();
            $.each(data.companyList, function (index, item) {
            $('#companylist').append($('<option>').text(item.description).attr('value', item.description))					
            });
            $('#companylist').val(data.selectedCompany);
            //$('#companylist').selectmenu("refresh", true);
            var selectedCompany=localStorage.setItem("selectedCompany",data.selectedCompany);
           }catch(e){} 
           $('#overlay_login').hide();         
        });


}


}
