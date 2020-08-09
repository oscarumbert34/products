export class Product {
     id: string;
     name: string;
     description: string;
     value: number;
     saleValue: number;
     quantity: number;
     box: number;
     category: string;
     gain: number;

     constructor(){
        this.id = '';
        this.name = '';
        this.description = '';
        this.value = 0;
        this.saleValue = 0;
        this.quantity =  0;
        this.box = 0;
        this.category = '';
        this.gain = 0;
     }
}

