import { Route } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { NoAuthGuard } from './core/auth/guards/noAuth.guard';
import { LayoutComponent } from './layout/layout.component';
import { InitialDataResolver } from './app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'main/subjects'},
    {path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'main/subjects'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-in', loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('./modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
        ]
    },

    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [

            {path: 'main', loadChildren: () => import('./modules/admin/main/main.module').then(m => m.MainModule)},

            {path: 'instruments', loadChildren: () => import('./modules/admin/instruments/instruments.module').then(m => m.InstrumentsModule)},

            {path: 'subjects/:subject/:grade', loadChildren: () => import('./modules/admin/academy/academy.module').then(m => m.AcademyModule)},

            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('./modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];
