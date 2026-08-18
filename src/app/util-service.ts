import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  
  private productsList: any[] = [];

  addProduct(product: any): void {
    this.productsList.push(product);
  }

  getProducts(): any[] {
    return this.productsList;
  }

}
