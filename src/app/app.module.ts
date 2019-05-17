import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './views/data.service';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { ViewsComponent } from './views/views.component';

import { InvoiceComponent } from './views/invoice.component';
import { TabledemoComponent } from './tabledemo/tabledemo.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LogoutComponent } from './logout/logout.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewsComponent,
    InvoiceComponent,
    TabledemoComponent,
    LogoutComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    Ng2SmartTableModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
