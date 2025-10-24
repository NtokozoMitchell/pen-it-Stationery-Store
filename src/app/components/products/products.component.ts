import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {};

  ngOnInit () : void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data)
      },
      error: (error) => console.error(error)
    })
  }

}
