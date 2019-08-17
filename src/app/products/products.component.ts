import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[];

  constructor(private connection:ConnectionService) {
    this.connection.listProducts().subscribe(products=>{
      this.products = products;
    })

  }



  ngOnInit() {
  }

  
}
