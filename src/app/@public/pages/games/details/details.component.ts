import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { CURRENCIES_SYMBOL, CURRENCY_LIST } from '@mugan86/ng-shop-ui';
import { Component, OnInit } from '@angular/core';
import products from '@data/products.json';
import { ProductsService } from '@core/services/products.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  product: IProduct;
  // products[Math.floor(Math.random() * products.length)];
  selectImage: string;
  currencySelect = CURRENCIES_SYMBOL[CURRENCY_LIST.EURO];
  screens = [];
  relationalProducts: Array<object> = [];
  constructor(private productService: ProductsService) { }
  ngOnInit() {
    this.productService.getItem(1).subscribe( result => {
      console.log(result);
      this.product = result.product;
      this.selectImage = this.product.img;
      this.screens = result.screens;
      this.relationalProducts = result.relational;
    });
  }
  changeValue(qty: number) {
    console.log(qty);
  }

  selectImgMain(i: number) {
    this.selectImage = this.screens[i];
  }

}
