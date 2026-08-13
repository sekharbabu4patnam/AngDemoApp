import { Component, signal } from '@angular/core';
import { form, Field, required } from '@angular/forms/signals';

@Component({
  selector: 'app-registration',
  imports: [Field],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {

  customerModel = signal({
    userId: '',
    password: '',
    phone: ''
  });

  customerForm = form(this.customerModel, (field) => {
    required(field.userId);
    required(field.password);
    required(field.phone);
  });

  onRegister(): void {
    console.log('Registraion attempted');
    const custForm = this.customerForm().value();
    console.log(custForm);
  }
}
