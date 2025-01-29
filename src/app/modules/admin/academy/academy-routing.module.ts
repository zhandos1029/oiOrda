import {Route} from '@angular/router';
import {AcademyComponent} from "./academy.component";
import {DetailComponent} from "./detail/detail.component";

export const academyRoute: Route[] = [
  {
    path: '',
    component: AcademyComponent
  },
  {
    path: ':theme',
    component: DetailComponent
  }
];
