import { Component, inject } from '@angular/core';
import { CustomerService } from '../customer-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-component.html',
  styleUrl: './customer-component.css',
})
export class CustomerComponent {

  private customerService = inject(CustomerService);
  customerServiceResponse: any; // Variable to hold the response from the service
  customerId: number = 0; // Example customer ID, you can change this as needed
  customerName: string = ''; // Example customer name, you can change this as needed

  custId: number = 0; // Example customer ID, you can change this as needed
  custName: string = ''; // Example customer name, you can change this as needed
  addressId: number = 0; // Example address ID, you can change this as needed
  houseNo: string = ''; // Example house number, you can change this as needed
  addrLine1: string = ''; // Example address line 1, you can change this as needed
  addrLine2: string = ''
  city: string = ''; // Example city, you can change this as needed
  pincode: string = ''; // Example pin code, you can change this as needed
  state: string = ''; // Example state, you can change this as needed

  crudResponse: any; // Variable to hold the response from the service for CRUD operations

  onShowAllCustomers(): void {
    console.log('Show all customers button clicked');
    this.customerService.getAllCustomers().subscribe((customers) => {
      console.log('Retrieved customers:', customers);
      //this.customerServiceResponse = JSON.stringify(customers, null, 2); // Store the response as a string
      this.customerServiceResponse = customers; // Store the response as an object to iterate over in the template
    });
  }

  onShowCustomerDetailsById(): void {
    console.log('Show customer details button clicked');
    // Implement logic to show details for the specified customer
    this.customerService.getCustomerById(this.custId).subscribe((customer) => {
      console.log('Retrieved customer details:', customer);
     // this.customerServiceResponse = JSON.stringify(customer, null, 2); // Store the response as a string
     this.customerServiceResponse = [customer]; // Store the response as an object to iterate over in the template
    });
  }

  onShowCustomerDetailsByName(): void {
    console.log('Show customer details by name button clicked');  
    this.customerService.getCustomerByName(this.customerName).subscribe((customer) => {
      console.log('Retrieved customer details by name:', customer);
     // this.customerServiceResponse = JSON.stringify(customer, null, 2); // Store the response as a string
     this.customerServiceResponse = customer; // Store the response as an object to iterate over in the template
    });
  }

  onAddCustomer(): void {
    console.log('Add customer button clicked');
    const newCustomer = {
     
      custAddr: {
        addressId: this.addressId,
        houseNo: this.houseNo,
        addrLine1: this.addrLine1,
        addrLine2: this.addrLine2,
        city: this.city,
        pincode: this.pincode,
        state: this.state
      },
       custId: this.custId,
      custName: this.custName
    };

    this.customerService.addCustomer(newCustomer).subscribe((response) => {
      console.log('Customer added successfully:', response);
      // Handle the response, e.g., show a success message or update the UI
      this.crudResponse = response; // Store the response for display in the template
    });
  }
  }