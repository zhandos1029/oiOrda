import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '../@fuse';
import { FuseConfigModule } from '../@fuse/services/config';
import { FuseMockApiModule } from '../@fuse/lib/mock-api';
import { CoreModule } from './core/core.module';
import { appConfig } from './core/config/app.config';
import { mockApiServices } from './mock-api';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
