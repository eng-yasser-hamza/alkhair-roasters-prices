import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../../data/products.data';
import { categories } from '../../../data/categories.data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category {
  private route = inject(ActivatedRoute);

  products = products;
  categories = categories;
  categorySlug = '';
  private location = inject(Location);

  ngOnInit() {
    this.categorySlug =
      this.route.snapshot.paramMap.get('slug') ?? '';
  }

    get currentCategory() {
    return this.categories.find(
      category => category.slug === this.categorySlug
    );
  }

  get categoryProducts() {
    return this.products.filter(
      product => product.category === this.categorySlug
    );
  }

    goBack() {
    this.location.back();
  }

  //test
}
