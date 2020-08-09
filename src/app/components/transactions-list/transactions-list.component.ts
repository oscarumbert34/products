import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/service/transaction.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: any;
  transactions: Transaction[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'personName', 'saleValue', 'category', 'state', 'changeState'];
    this.transactionService.getTransactions().subscribe(
      reponse =>{
        this.transactions = reponse;
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = this.transactions;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error =>{

      }
    );

  }

}
