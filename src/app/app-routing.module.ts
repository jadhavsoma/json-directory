import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './views/invoice.component';
import { ViewsComponent } from './views/views.component';
import { TabledemoComponent } from './tabledemo/tabledemo.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';



const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', redirectTo: '/docArchive.html', pathMatch: 'full' },
      { path:'docArchive.html', component: ViewsComponent  },
      { path:'invoice.html', component: InvoiceComponent  },
      { path:'auditList.html', component: InvoiceComponent  },
      { path:'otherDocuments.html', component: InvoiceComponent  },
      { path:'table', component: TabledemoComponent  },
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {path: 'logout', component: LogoutComponent}
    ]
  },
  { path:'**', component: ViewsComponent  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ useHash: true }) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule {}