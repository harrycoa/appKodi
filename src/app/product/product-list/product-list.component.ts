import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productTitle: string = 'Lista de Productos';
  imageWidth: number = 50;
  imageMArgin: number = 2;
  showImage: boolean = false;

  listFilter: string = '';

  /* mensajeBoton: string = 'Ocultar imagen';
  mensajeBoton2: string = 'Mostrar imagen'; */

  products: any[] = [
    {
      productoId: 1,
      productName: 'Camisa volcom',
      description: 'camisa 100 % algodon',
      createDate: 'May 21, 2020',
      price: '500',
      rating: '2.6',
      imageUrl: 'https://www.skatepro.es/99-35448.htm#show_image',
    },
    {
      productoId: 2,
      productName: 'Camisa volcom2',
      description: 'camisa 100 % algodon',
      createDate: 'May 21, 2020',
      price: '500',
      rating: '2.6',
      imageUrl: 'https://www.skatepro.es/99-35342.htm#show_image',
    },
    {
      productoId: 3,
      productName: 'Camisa volcom3',
      description: 'camisa 100 % algodon',
      createDate: 'Jul 21, 2020',
      price: '500',
      rating: '2.6',
      imageUrl: 'https://www.skatepro.es/99-35342.htm#show_image',
    },
  ];

  ShowImage(): void {
    this.showImage = !this.showImage;
  }
  constructor() {}

  ngOnInit(): void {}
}
