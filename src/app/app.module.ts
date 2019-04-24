import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './views/data.service';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { ViewsComponent } from './views/views.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewsComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule,
    AppRoutingModule,
	  HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
