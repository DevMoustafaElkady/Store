import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products:any[]=[
{
  id: 1,
  title: 'Rollex Watch',
  content: "Some quick example text to build on the card title and make up the bulk of the card'content",
  price: "150.00",
  category: "Whatches"
},
{
  id: 2,
  title: 'GS340',
  content: "Some quick example text to build on the card title and make up the bulk of the card'content",
  price: "350.00",
  category: "HeadPhones"
},
{
  id: 3,
  title: 'Samsung Galaxi 70',
  content: "Some quick example text to build on the card title and make up the bulk of the card'content",
  price: "5500.00",
  category: "Smart Phones"
}
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
