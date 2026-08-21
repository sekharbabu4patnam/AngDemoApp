import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {


  private httpClient = inject(HttpClient);
  
  addCustomer(newCustomer: { custAddr: { addressId: number; houseNo: string; addrLine1: string; addrLine2: string; city: string; pincode: string; state: string; }; custId: number; custName: string; }) : Observable<any> { 
    return this.httpClient.post('http://localhost:8080/api/v1/customers', newCustomer);
  }

  getAllCustomers(): Observable<any[]> {
    console.log('Fetching all customers from the API...');
    // Simulate an API call and return an Observable
    /*return new Observable((observer) => {
      // Simulate a delay
      setTimeout(() => {
        const customers = [
          { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
          { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' }
        ];
        observer.next(customers);
        observer.complete();
      }, 1000);
    });*/
    // Actual API call using HttpClient
    return this.httpClient.get<any[]>('http://localhost:8080/api/v1/customers');
  }

  getCustomerById(customerId: number): Observable<any> {
    console.log(`Fetching customer details for ID: ${customerId} from the API...`);
    // Simulate an API call and return an Observable
    /*return new Observable((observer) => {
      // Simulate a delay
      setTimeout(() => {
        const customer = { id: customerId, name: 'John Doe', email: 'john.doe@example.com' };
        observer.next(customer);
        observer.complete();
      }, 1000);
    });*/
    // Actual API call using HttpClient
    return this.httpClient.get<any>(`http://localhost:8080/api/v1/customers/id/${customerId}`);
  }

  getCustomerByName(customerName: string): Observable<any> {
    console.log(`Fetching customer details for Name: ${customerName} from the API...`);
    // Simulate an API call and return an Observable
    /*return new Observable((observer) => {
      // Simulate a delay
      setTimeout(() => {
        const customer = { id: 1, name: customerName, email: 'john.doe@example.com' };
        observer.next(customer);
        observer.complete();
      }, 1000);
    });*/
    // Actual API call using HttpClient
    return this.httpClient.get<any>(`http://localhost:8080/api/v1/customers/name/${customerName}`);
  } 

}