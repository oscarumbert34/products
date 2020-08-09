import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ServiceProductsService } from 'src/app/service/service-products.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validation } from '../../models/validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  displayForm: string = 'example-card-hide';
  request: Product;
  product: FormGroup;
  componentUse: string = 'create';

  constructor(private service : ServiceProductsService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  @Output() updateList = new EventEmitter<boolean>();

  ngOnInit() {
      this.request = new Product();
      this.product = new FormGroup({
        name: new FormControl('',Validators.required),
        description: new FormControl(''),
        value: new FormControl('',[Validators.required, Validators.min(1)]),
        saleValue: new FormControl('',[Validators.required, Validators.min(1)]),
        quantity: new FormControl('',[Validators.required, Validators.min(1)]),
        box: new FormControl(''),
        gain: new FormControl('')
      });
  }

  load(product: Product) {
    this.componentUse = 'edit';
    this.request = product;
  }
  showOrHideForm(){
    this.displayForm = (this.displayForm == 'example-card-hide') ? 'example-card-show' : 'example-card-hide';
    if(this.displayForm == 'example-card-hide'){
      this.request = new Product();
    }
  }
  save() {

    if (this.componentUse == 'create') {

        this.create();
    } else {

        this.update();
    }

  }
  create() {

    this.service.createProduct(this.request).subscribe(
        response => {
            this.snackBar.open(response,'',{
              duration: 2000,
            });
            this.displayForm = 'example-card-hide';
            console.log(response);
            this.updateList.emit(true);

        },
        error => {
            console.log(error);
        }
    );
  }
  update() {

    this.service.updateProduct(this.request).subscribe(
        response => {
            this.snackBar.open(response,'',{
              duration: 2000,
            });
            this.displayForm = 'example-card-hide';
            console.log(response);
            this.updateList.emit(true);
        },
        error => {
            console.log(error);
        }
    );
  }
  openTransactions(){
    this.router.navigate(['/transactionsList']);
  }
  openStock(){
    this.router.navigate(['/' ]);
  }

}
