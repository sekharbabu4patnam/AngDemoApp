import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UtilService } from '../util-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userId = '';
  password = '';

  private utilService = inject(UtilService);

  onLogin(): void {
    console.log('Login attempted', { userId: this.userId, password: this.password });
  }

  onAddProduct(): void {
    const newProduct = { id: Date.now(), name: 'New Product', price: 100 };
    this.utilService.addProduct(newProduct);
    console.log('Current products list:', this.utilService.getProducts());
  }

}
