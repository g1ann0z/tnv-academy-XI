import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AlternativeComponent } from './alternative/alternative.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NutritionalComponent } from './nutritional/nutritional.component';
import { RecipeComponent } from './recipe/recipe.component';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HeaderComponent, AlternativeComponent, CarouselComponent, FooterComponent, HeaderComponent, IngredientsComponent, NutritionalComponent, RecipeComponent, VideoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'giovanni-deiana-angular';
}
