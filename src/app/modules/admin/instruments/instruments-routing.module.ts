import {Route} from '@angular/router';
import {NewsComponent} from "./news/news.component";
import {SettingComponent} from "./setting/setting.component";
import {ContactsComponent} from "./contacts/contacts.component";

export const instrumentsRoutes: Route[] = [
  {
    path     : 'news',
    component: NewsComponent,
  },
  {
    path     : 'setting',
    component: SettingComponent,
  },
  {
    path     : 'contacts',
    component: ContactsComponent,
  }
];
