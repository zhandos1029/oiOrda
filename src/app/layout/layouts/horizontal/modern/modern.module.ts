import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FuseFullscreenModule } from '../../../../../@fuse/components/fullscreen';
import { FuseLoadingBarModule } from '../../../../../@fuse/components/loading-bar';
import { FuseNavigationModule } from '../../../../../@fuse/components/navigation';
import { LanguagesModule } from '../../../common/languages/languages.module';
import { SearchModule } from '../../../common/search/search.module';
import { UserModule } from '../../../common/user/user.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ModernLayoutComponent } from './modern.component';

@NgModule({
    declarations: [
        ModernLayoutComponent
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
        ModernLayoutComponent
    ]
})
export class ModernLayoutModule
{
}
