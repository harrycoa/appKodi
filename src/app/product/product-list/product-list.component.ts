import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

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

  products: IProduct[] = [];

  ShowImage(): void {
    this.showImage = !this.showImage;
  }
  constructor(private productService: ProductService) {}

  OnRatingClicked(message: string){
    this.productTitle = `Lista de Productos ${message}`;
  }

  ngOnInit(): void {
    this.products = this.productService.GetProducts();
  }
}
