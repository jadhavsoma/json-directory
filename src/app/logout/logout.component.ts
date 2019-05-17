import { Component, OnInit } from '@angular/core';
import { DataService } from '../views/data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {

//getLogout from application 
  this.dataService.getLogout()
  .subscribe(
    (data)=>
    {
      //alert(data.authstatus); //logout
      //this.router.navigate(['/app-logout'])
    }
  );
    
}

}
