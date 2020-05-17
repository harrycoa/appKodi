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
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = '';
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ShowImage(): void {
    this.showImage = !this.showImage;
  }
  OnRatingClicked(message: string) {
    this.productTitle = `Lista de Productos ${message}`;
  }

  ngOnInit(): void {
    this.productService.GetProducts().subscribe(
      (data: IProduct[]) => {
        this.products = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
