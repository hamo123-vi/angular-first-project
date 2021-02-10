import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items= this.cartService.getItems();
  cartForm=this.formBuilder.group
  (
    {
      name: '',
      surname: '',
      address: ''
    }
  )
  constructor(
    private cartService: CartService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
  }

  submit(): void
  {
    this.cartService.clearCart();
    console.warn("Your data have been submitted! ",this.cartForm.value);
    this.cartForm.reset();
  }

}