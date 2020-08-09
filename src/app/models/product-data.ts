import { Product } from './product';
import { throws } from 'assert';

export interface ProductData {
     idEdit: string;
     idDelete: string;
     id: string;
     name: string;
     description: string;
     value: number;
     saleValue: number;
     quantity: number;
     box: number;
     category: string;
     gain: number;
}