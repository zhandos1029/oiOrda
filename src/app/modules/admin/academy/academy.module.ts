import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcademyComponent } from './academy.component';
import {academyRoute} from "./academy-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DetailComponent} from "./detail/detail.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SharedModule} from "../../../shared/shared.module";
import {TranslocoModule} from "@ngneat/transloco";

@NgModule({
  declarations: [
    AcademyComponent,
      DetailComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        TranslocoModule,
        RouterModule.forChild(academyRoute),
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule
    ],
})
export class AcademyModule {}
