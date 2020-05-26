import { Component, OnInit,ElementRef } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  //checker=false;
  thirdtable=false;
  firsttable=true;
  secondtable=false;
  constructor(private _customerService:CustomerService) {}//here I have injected the object of CustomerService
  //To store the customers from service object
  Customers:Customer[]=[];
  //private check:boolean=true;
   //To store the selected customers
  selectedCustomers:Customer[];
  
  
  ngOnInit() {
      this.Customers=this._customerService.Customers;
      this.selectedCustomers=[];
      
  }
  
  //eventfired is the select event object fired when user selects the particular customer for deletion 
  selectCustomer(customer:Customer, eventfired){
    var s=this.selectedCustomers.find(x=>x==customer);
    //console.log(s);
    if(s==undefined)
    {
      this.selectedCustomers.push(customer);//adding the distinct objects
      customer.checked=true; 
    }
      
    else
    {
      this.selectedCustomers=this.selectedCustomers.filter(x=>x!=customer);//removing the objects on double click
      customer.checked=false;
    }
      
    this.secondtable=true;
    //if(eventfired.type=='click')console.log("ok");
    //console.log(eventfired.type);//it is working
  }
  selectAll(){
      if(this.selectedCustomers.length==this.Customers.length)return;//it means all the data is selected
      this.selectedCustomers=this.Customers.filter(x=>x.regstatus=="New");
      this.secondtable=true;
      for(var i=0;i<this.selectedCustomers.length;i++)
      this.selectedCustomers[i].checked=true;
  }
//Can be used for creating logic during the click of proceed button
  proceedDeletion(){
    //console.log("deletion called");
    
    this.thirdtable=true;
    this.firsttable=false;
    this.secondtable=false;
  }
  //Can be used for creating logic during the click of ok button    
 confirmDeletion(){
    
    for(let y of this.selectedCustomers)
    {
      this.Customers=this.Customers.filter(x=>x!=y);
      //this.selectedCustomers=this.selectedCustomers.filter(x=>x!=y);//delete selectedCustomers warna ye fir
      //se display ho jaega select karne pe in the second table
      
    }
    this.selectedCustomers=[];
    this.secondtable=false;
    this.thirdtable=false;
    this.firsttable=true;
  }
  //Can be used for cerating logic during the click of cancel button
  cancelDeletion(){
      //this.secondtable=false;
      this.thirdtable=false;
      this.firsttable=true;
      for(var i=0;i<this.Customers.length;i++)
        this.Customers[i].checked=false;
      this.selectedCustomers=[];
      
  }
}
