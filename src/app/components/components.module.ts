import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {FuseCardModule} from "../../@fuse/components/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import {TranslocoModule} from "@ngneat/transloco";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { OrganizationCardsComponent } from './organization-cards/organization-cards.component';
import { GradeSelectionModalComponent } from './organization-cards/grade-selection-modal/grade-selection-modal.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
    declarations: [
        BreadCrumbsComponent,
        OrganizationCardsComponent,
        GradeSelectionModalComponent,
    ],
    imports: [
        SharedModule,
        FuseCardModule,
        MatProgressBarModule,
        MatIconModule,
        MatTableModule,
        TranslocoModule,
        MatPaginatorModule,
        MatSortModule,
        MatMenuModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatButtonToggleModule
    ],
    exports: [
        BreadCrumbsComponent,
        OrganizationCardsComponent,
        GradeSelectionModalComponent
    ]
})
export class ComponentModule
{
}
