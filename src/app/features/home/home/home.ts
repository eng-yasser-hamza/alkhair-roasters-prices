import { Component } from '@angular/core';
import { categories } from '../../../data/categories.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  categories = categories;
}
