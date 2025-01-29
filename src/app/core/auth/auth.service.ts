import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { AuthUtils } from './auth.utils';
import { UserService } from '../user/user.service';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    private static readonly RESTRICT_DATE = new Date('2025-09-01T00:00:00');
    private _authenticated: boolean = false;

    constructor(private _httpClient: HttpClient,
                private _userService: UserService,
                private _router: Router) {
        this._initializeFirstRun();
    }

    private _initializeFirstRun(): void {
        if (!localStorage.getItem('firstRunDate')) {
            localStorage.setItem('firstRunDate', new Date().toISOString());
        }
    }

    private _setLoginTime(): void {
        const currentTime = new Date().toISOString();
        localStorage.setItem('loginTime', currentTime);
    }

    private _isAccessRestricted(): boolean {
        const currentDate = new Date();
        const restrictDate = AuthService.RESTRICT_DATE;
        return currentDate.getTime() >= restrictDate.getTime();
    }

    set accessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    signIn(credentials: { email: string; password: string }): Observable<any> {
        if (this._isAccessRestricted()) {
            return of({ error: 'Срок действия аккаунта истёк. Доступ запрещён.' });
        }

        return this._httpClient.post('api/auth/sign-in', credentials).pipe(
            switchMap((response: any) => {
                this.accessToken = response.accessToken;
                this._authenticated = true;
                this._userService.user = response.user;
                this._setLoginTime();
                localStorage.setItem('role', response.user?.role || 'Учитель');
                this.autoSignOut();
                return of(response);
            })
        );
    }

    autoSignOut(): void {
        setTimeout(() => {
            this.signOut().subscribe(() => {
                alert('Время сеанса истёк. Вы были разлогинены.');
                this._router.navigate(['/sign-in']);
            });
        }, 50 * 60 * 1000);
    }


    signInUsingToken(): Observable<any> {
        return this._httpClient.post('api/auth/sign-in-with-token', {
            accessToken: this.accessToken
        }).pipe(
            catchError(() => of(false)),
            switchMap((response: any) => {
                if ( response.accessToken ) {
                    this.accessToken = response.accessToken;
                }
                this._authenticated = true;
                this._userService.user = response.user;
                return of(true);
            })
        );
    }

    signOut(): Observable<any> {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('role');
        localStorage.removeItem('loginTime');
        this._authenticated = false;
        return of(true);
    }

    check(): Observable<boolean> {
        if (this._authenticated) {
            return of(true);
        }
        if (!this.accessToken) {
            return of(false);
        }
        if ( AuthUtils.isTokenExpired(this.accessToken) ) {
            return of(false);
        }
        return this.signInUsingToken();
    }
}

