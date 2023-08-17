import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  value: number = 5;
  products=[
    {date:"17/08/2023",name:"clothes1",description:"description here", type:"clothes", newP:"23d", oldP:"60d"},
    {date:"17/08/2023",name:"accessory1",description:"description here", type:"accessories", newP:"20d", oldP:"60d"},
    {date:"17/08/2023",name:"service1",description:"description here", type:"services", newP:"20d", oldP:"60d"},
    {date:"17/08/2023",name:"clothes2",description:"description here", type:"clothes", newP:"40d", oldP:"60d"},
    {date:"17/08/2023",name:"accessory2",description:"description here", type:"accessories", newP:"20d", oldP:"60d"},
    {date:"17/08/2023",name:"service2",description:"description here", type:"services", newP:"35d", oldP:"60d"},
    {date:"17/08/2023",name:"service3",description:"description here", type:"services", newP:"55d", oldP:"60d"},


  ]
  searchText: string = '';
  filteredProducts = [...this.products];

  filterByCategory(category: string) {
    if (category === 'All features') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product => product.type === category);
    }
  }

  showAll() {
    this.filteredProducts = [...this.products];
  }


  filterProducts() {
    if (this.searchText.trim() !== '') {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

// Function to format the slider labels
formatLabel(value: number) {
  return `${value}d`;
}

  //filter by price logic
  min: number = 0; // Initial minimum price
  max: number = 60; // Initial maximum price


  filterByPrice() {
    this.filteredProducts = this.products.filter(product => {
      const productPrice = parseFloat(product.newP.substring(0));
      return productPrice >= this.min && productPrice <= this.max;
    });
  }




  }

