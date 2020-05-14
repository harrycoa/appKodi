import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  GetProducts(): IProduct[]{
    return [
      {
        productoId: 1,
        productName: 'Camisa volcom',
        description: 'camisa 100 % algodon',
        createDate: 'May 21, 2020',
        price: 500,
        rating: 5,
        imageUrl: 'https://www.skatepro.es/99-35448.htm#show_image',
      },
      {
        productoId: 2,
        productName: 'Camisa element',
        description: 'camisa 100 % algodon',
        createDate: 'May 21, 2020',
        price: 500,
        rating: 3,
        imageUrl: 'https://www.skatepro.es/99-35342.htm#show_image',
      },
      {
        productoId: 3,
        productName: 'Camisa dc',
        description: 'camisa 100 % algodon',
        createDate: 'Jul 21, 2020',
        price: 500,
        rating: 5,
        imageUrl: 'https://www.skatepro.es/99-35342.htm#show_image',
      },
    ];
  }
}
