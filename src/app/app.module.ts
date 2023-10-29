import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CustomerClearanceComponent } from './dashboard/customer-clearance/customer-clearance.component';
import { IntransitComponent } from './dashboard/intransit/intransit.component';
import { TotalOrderComponent } from './dashboard/total-order/total-order.component';
import { UnderProductionComponent } from './dashboard/under-production/under-production.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardComponent,
    TotalOrderComponent,
    UnderProductionComponent,
    IntransitComponent,
    CustomerClearanceComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
