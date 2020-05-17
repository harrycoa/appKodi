import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // llamar en el service un archivo json
  private productUrl = 'assets/data/products.json';
  constructor(private http:HttpClient) { }

  GetProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl);
  }
}
