import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  proizvod;
  constructor(
    private route: ActivatedRoute,
    private cartService:CartService,
  ) { }

  ngOnInit() {
    const routeParams=this.route.snapshot.paramMap;
    const productIdFromRoute=Number(routeParams.get('productId'));
    this.proizvod=products.find(proizvod => proizvod.id === productIdFromRoute);
  }

  addToCart(proizvod)
  {
     this.cartService.addToCart(proizvod);
     window.alert("Item is added to cart!!!");
  }

}