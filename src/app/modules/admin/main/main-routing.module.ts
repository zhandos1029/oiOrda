import {Route} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {PageComponent} from "./page/page.component";
import {SubjectsComponent} from "./subjects/subjects.component";
import {ProjectResolver} from "./about/project.resolvers";

export const mainRoutes: Route[] = [
  {
    path     : 'page',
    component: PageComponent,
  },
  {
    path     : 'about',
    component: AboutComponent,
    resolve  : {
      data: ProjectResolver
    }
  },
  {
    path     : 'subjects',
    component: SubjectsComponent,
  },
];
