import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListaProductoComponent } from './components/list-product/list-product.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';

const routes: Routes = [ { path: '' , component: ListaProductoComponent},
                         { path: 'transactionsList', component: TransactionsListComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
