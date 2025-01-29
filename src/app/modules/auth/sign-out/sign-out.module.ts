import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from '../../../../@fuse/components/card';
import { SharedModule } from '../../../shared/shared.module';
import { AuthSignOutComponent } from './sign-out.component';
import { authSignOutRoutes } from './sign-out.routing';
import {TranslocoModule} from "@ngneat/transloco";

@NgModule({
    declarations: [
        AuthSignOutComponent
    ],
    imports: [
        RouterModule.forChild(authSignOutRoutes),
        MatButtonModule,
        FuseCardModule,
        SharedModule,
        TranslocoModule
    ]
})
export class AuthSignOutModule
{
}
