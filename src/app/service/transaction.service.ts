import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../models/transaction';
import { environment } from 'src/environments/environment';
import { TransactionsListComponent } from '../components/transactions-list/transactions-list.component';
import { Observable } from 'administrar-productos-sandra-win32-x64/resources/app/electron-classroom-win32-x64/resources/app/node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  public getTransactions(): Observable<any> {
    const response = this.http.get<Transaction[]>(environment.endPointTransaction + 'getTransactions');
    return response;
  }
  public createTransactions(request: Transaction): Observable<any> {
    const params = JSON.stringify(request);
    const headers = new HttpHeaders().set('Content-type', 'Application/json');
    return this.http.post(environment.endPointTransaction + 'createTransactions', params, {headers:headers, responseType: 'text'});
  }
}
