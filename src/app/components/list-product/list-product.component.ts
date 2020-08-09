import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { CreateProductComponent } from '../create-product/create-product.component';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { ServiceProductsService } from 'src/app/service/service-products.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListaProductoComponent implements OnInit {

  displayedColumns: string[];

  categories: Category[] = [
    {value: 'Maquillaje-1', viewValue: 'Maquillaje'},
    {value: 'Bazar-2', viewValue: 'Bazar'},
    {value: 'Cuidado-personal-3', viewValue: 'Cuidado personal'}
  ];

  dataSource: any;
  requestTransaction: Transaction;
  products: Product[];
  request: Product;
  listSales: true;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(CreateProductComponent, {static: true}) create: CreateProductComponent; 

  constructor(private service: ServiceProductsService,
              private transactionService: TransactionService,
              private snackBar: MatSnackBar,
              private router: Router,
              private routeActive: ActivatedRoute) {

  }


  ngOnInit() {

      this.displayedColumns = ['id', 'name', 'description', 'saleValue', 'quantity', 'box', 
                               'category', 'edit', 'delete', 'sale'];
      this.request = new Product();
      this.service.getProducts().subscribe(
        response => {
          this.products = response;
          this.dataSource = new MatTableDataSource();
          this.dataSource.data = this.products;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(row: Product) {
    this.request = row;
    this.create.load(row);
    if(this.create.displayForm == 'example-card-hide'){
      this.create.showOrHideForm();

    }
  }

  refreshList(){
    this.service.getProducts().subscribe(
      response => {
        this.products = response;
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = this.products;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }



  delete(row: Product) {

    this.request = row;

    this.service.deleteProduct(this.request).subscribe(
      response => {
          this.snackBar.open(response.message, '', {
            duration: 2000,
          });
          console.log('result ' + response.message);
          this.refreshList();
      },
      error => {
          console.log(error);
      }
    );
  }
  generateTransaction(quantity: number, row: any) {

    this.requestTransaction = new Transaction();
    this.requestTransaction.name = row.name;
    this.requestTransaction.idProduct = row.id;
    this.requestTransaction.category = row.category;
    this.requestTransaction.quality = quantity;
    this.requestTransaction.saleValue = row.saleValue;
    this.requestTransaction.state = 'rrr';

    this.transactionService.createTransactions(this.requestTransaction).subscribe(
      response =>{
          console.log(response);
          row.quantity = row.quantity - quantity;
          this.create.request = row;
          this.create.update();
          this.refreshList();
      },
      error =>{
         console.log(error);
      }

    );
  

  }


}
