import { Injectable } from '@angular/core';
import { Customer } from './customer';


@Injectable()
export class CustomerService {

  constructor() { }
  //To define the customer array with test data given in the question
  Customers:Customer[]=[{"id":101,"customerName":"Kiran","customerAge":25,"customerMobileNumber":9876543210,"regstatus":"New","checked":false},
  {"id":102,"customerName":"Rajesh","customerAge":32,"customerMobileNumber":9638527410,"regstatus":"Confirmed","checked":false},
  {"id":103,"customerName":"Keerthi","customerAge":26,"customerMobileNumber":9865327410,"regstatus":"New","checked":false},
  {"id":104,"customerName":"Mounika","customerAge":25,"customerMobileNumber":9738527410,"regstatus":"Confirmed","checked":false},
  {"id":105,"customerName":"Ravana","customerAge":26,"customerMobileNumber":9869327410,"regstatus":"New","checked":false}];
  
  //Return all customers
  getCustomers(){
      //return [];
      return this.Customers;
      
  }
  
 
  //Delete the set of cutomers given as input
  deleteCustomers(custs:Customer[]):boolean{
        return false;
       
  }
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  


}
