import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {instrumentsRoutes} from './instruments-routing.module';
import {RouterModule} from "@angular/router";
import { NewsComponent } from './news/news.component';
import { SettingComponent } from './setting/setting.component';
import { ContactsComponent } from './contacts/contacts.component';
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FuseCardModule} from "../../../../@fuse/components/card";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TranslocoModule} from "@ngneat/transloco";


@NgModule({
  declarations: [
    NewsComponent,
    SettingComponent,
    ContactsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(instrumentsRoutes),
        MatIconModule,
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatSlideToggleModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatSelectModule,
        MatButtonToggleModule,
        FormsModule,
        FuseCardModule,
        MatListModule,
        MatMenuModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatTooltipModule,
        TranslocoModule,
    ]
})
export class InstrumentsModule { }
