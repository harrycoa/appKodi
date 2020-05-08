import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productTitle:string = 'Lista de Productos';
  product:any[] = [
    {
      "productoId": 1,
      "productName": 'Camisa volcom'
    },
    {}



  ];

  constructor() { }

  ngOnInit(): void {
  }

}
