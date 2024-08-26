import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { PlanPageComponent } from './plan-page/plan-page.component';

export const routes: Routes = [
  {
    path: "", pathMatch: "full", component: HomePageComponent
  },
  {
    path: "about-us", pathMatch: "full", component: AboutUsPageComponent
  },
  {
    path: "plan", pathMatch: "full", component: PlanPageComponent
  },
  {
    path: "**", redirectTo: ""
  }

];
