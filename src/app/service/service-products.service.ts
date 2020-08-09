import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';

import { Observable } from 'rxjs';
import { ProductData } from '../models/product-data';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServiceProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(){
    const response = this.http.get<ProductData[]>(environment.endPointProduct + 'getProducts');
    return response;
  }
  public updateProduct(request: Product): Observable<any> {
    const json = JSON.stringify(request);
    const params = json;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(environment.endPointProduct + 'updateProduct', params, {headers:headers, responseType: 'text'});
  }
  public deleteProduct(request: Product): Observable<any> {
    const params = JSON.stringify(request);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete<Product>(environment.endPointProduct + 'deleteProduct/?id='+request.id, {headers:headers});
  }

  public getProduct(request: string): Observable<any> {
    const params = JSON.stringify(request);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Product>(environment.endPointProduct + 'getProduct', {headers:headers});
  }
  public createProduct(request: Product): Observable<any> {
    const params = JSON.stringify(request);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(environment.endPointProduct + 'createProduct', params, {headers:headers, responseType: 'text'});
  }
}
