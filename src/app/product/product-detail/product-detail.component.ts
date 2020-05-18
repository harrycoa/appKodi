import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productDetail: string = 'Detalle de Producto';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      //debugger;
      this.productDetail += `: ${id}`;
      this.GetProductById(Number.parseInt(id));
    }
  }

  GetProductById(id: number){
    this.productService.GetProductbyId(id).subscribe(
      (data: IProduct) => {
        //debugger;
        this.product = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  Back(){
    this.router.navigate(['product']);
  }
}

