import { Component, OnInit } from '@angular/core';
import { CouponsMethodsService } from '../../../../services/coupons-methods.service'
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private _coupserv : CouponsMethodsService) { }

  ngOnInit() {
  }

}
