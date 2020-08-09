export class Transaction {
    name: string;
    idProduct: string;
    saleValue: number;
    category: string;
    state: string;
    quality: number;

    constructor(){
        this.name = '';
        this.idProduct = '';
        this.saleValue = 0;
        this.category = '';
        this.state = '';
        this.quality = 0;
    }
}