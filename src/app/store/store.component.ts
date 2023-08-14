import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  value: number = 5;
  newArrivals=[
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00", img:"../../assets"},
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00"},
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00"},
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00"},
  ]

  trending=[
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00", img:"../../assets"},
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00"},
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00"},
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00"},
  ]

  toprated=[
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00", img:"../../assets"},
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00"},
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00"},
    {name:"Relaxed Short Full", type:"Clothes", newP:"$20.00", oldP:"$45.00"},
  ]

}
