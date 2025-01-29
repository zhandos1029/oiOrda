import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';
import { LandingHomeComponent } from './home.component';
import { landingHomeRoutes } from './home.routing';
import {MatTabsModule} from "@angular/material/tabs";
import {FuseCardModule} from "../../../../@fuse/components/card";
import {LanguagesModule} from "../../../layout/common/languages/languages.module";
import {TranslocoModule} from "@ngneat/transloco";

@NgModule({
    declarations: [
        LandingHomeComponent
    ],
    imports: [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatTabsModule,
        FuseCardModule,
        LanguagesModule,
        TranslocoModule
    ]
})
export class LandingHomeModule
{
}
