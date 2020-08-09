import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule, MatInputModule, MatButtonModule,
MatIconModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule,
 MatCardModule,
 MatSnackBar,
 MatSnackBarModule,
 MatMenu,
 MatMenuModule} from '@angular/material';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ListaProductoComponent } from './components/list-product/list-product.component';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { OthersPipePipe } from './pipe/others-pipe.pipe';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    BarraSuperiorComponent,
    CreateProductComponent,
    TransactionsListComponent,
    OthersPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatMenuModule,
    AppRoutingModule],

  providers: [MatSnackBar],
  entryComponents: [CreateProductComponent],
  bootstrap: [AppComponent]})
export class AppModule { }
