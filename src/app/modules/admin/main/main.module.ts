import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {mainRoutes} from './main-routing.module';
import { AboutComponent } from './about/about.component';
import {RouterModule} from "@angular/router";
import { PageComponent } from './page/page.component';
import { SubjectsComponent } from './subjects/subjects.component';
import {ComponentModule} from "../../../components/components.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {TranslocoModule} from "@ngneat/transloco";
import {MatButtonModule} from "@angular/material/button";
import {FuseCardModule} from "../../../../@fuse/components/card";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatMenuModule} from "@angular/material/menu";
import {MatRippleModule} from "@angular/material/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSortModule} from "@angular/material/sort";
import {NgApexchartsModule} from "ng-apexcharts";
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
    declarations: [
        AboutComponent,
        PageComponent,
        SubjectsComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(mainRoutes),
        ComponentModule,
        MatButtonModule,
        FuseCardModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        NgApexchartsModule,
        TranslocoModule,
        SharedModule
    ]
})
export class MainModule { }
