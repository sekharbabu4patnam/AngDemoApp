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
  custId: number = 0; // Example customer ID, you can change this as needed
  customerName: string = ''; // Example customer name, you can change this as needed
  onShowAllCustomers(): void {
    console.log('Show all customers button clicked');
    this.customerService.getAllCustomers().subscribe((customers) => {
      console.log('Retrieved customers:', customers);
    });
  }

  onShowCustomerDetailsById(): void {
    console.log('Show customer details button clicked');
    // Implement logic to show details for the specified customer
    this.customerService.getCustomerById(this.custId).subscribe((customer) => {
      console.log('Retrieved customer details:', customer);
    });
  }

  onShowCustomerDetailsByName(): void {
    console.log('Show customer details by name button clicked');  
    this.customerService.getCustomerByName(this.customerName).subscribe((customer) => {
      console.log('Retrieved customer details by name:', customer);
    });
  }

}
