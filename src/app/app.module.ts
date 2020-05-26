import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CustomerViewComponent} from './customer-view/customer-view.component';
import { AppComponent } from './app.component';
import { CustomerService } from './customer.service';
import { FormsModule }   from '@angular/forms';//added this for [checked]=true karne ke liye
@NgModule({
  declarations: [
    AppComponent,
    CustomerViewComponent//added this 
  ],
  imports: [
    BrowserModule,
    FormsModule  //added this
  ],
  providers: [CustomerService], //added this
  bootstrap: [AppComponent]
})
export class AppModule { }
