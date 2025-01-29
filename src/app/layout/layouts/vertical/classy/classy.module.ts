import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseNavigationModule } from '../../../../../@fuse/components/navigation';
import { FuseLoadingBarModule } from '../../../../../@fuse/components/loading-bar';
import { FuseFullscreenModule } from '../../../../../@fuse/components/fullscreen/fullscreen.module';
import { LanguagesModule } from '../../../common/languages/languages.module';
import { SearchModule } from '../../../common/search/search.module';
import { UserModule } from '../../../common/user/user.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ClassyLayoutComponent } from './classy.component';

@NgModule({
    declarations: [
        ClassyLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        FuseFullscreenModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        LanguagesModule,
        SearchModule,
        UserModule,
        SharedModule
    ],
    exports     : [
        ClassyLayoutComponent
    ]
})
export class ClassyLayoutModule
{
}
