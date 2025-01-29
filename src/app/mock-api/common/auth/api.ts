import { Injectable } from '@angular/core';
import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import Utf8 from 'crypto-js/enc-utf8';
import { FuseMockApiService } from '../../../../@fuse/lib/mock-api';
import { user as userData } from '../user/data';

@Injectable({
    providedIn: 'root'
})
export class AuthMockApi {
    private readonly _secret = 'YOUR_SECRET_KEY';
    private _users: any = userData;

    constructor(private _fuseMockApiService: FuseMockApiService) {
        this.registerHandlers();
    }

    registerHandlers(): void {
        this._fuseMockApiService.onPost('api/auth/sign-in', 1500).reply(({ request }) => {
            const { email, password } = request.body;
            const user = this._users.find(u => u.email === email && u.password === password);

            if (user) {
                return [
                    200,
                    {
                        user: { email: user.email, role: user.role },
                        accessToken: this._generateJWTToken(user),
                        tokenType: 'bearer'
                    }
                ];
            }

            return [404, { error: 'Invalid credentials' }];
        });

        this._fuseMockApiService.onPost('api/auth/sign-in-with-token').reply(({ request }) => {
            const token = request.body.accessToken;

            if (this._verifyJWTToken(token)) {
                const user = this._decodeJWT(token);
                return [200, {
                    user: { email: user.email, role: user.role },
                    accessToken: this._generateJWTToken(user),
                    tokenType: 'bearer'
                }];
            }

            return [401, { error: 'Invalid token' }];
        });
    }

    private _generateJWTToken(user: any): string {
        const header = { alg: 'HS256', typ: 'JWT' };
        const payload = {
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60,
            email: user.email,
            role: user.role
        };

        const headerBase64 = this._base64url(Utf8.parse(JSON.stringify(header)));
        const payloadBase64 = this._base64url(Utf8.parse(JSON.stringify(payload)));
        const signature = this._base64url(HmacSHA256(`${headerBase64}.${payloadBase64}`, this._secret));

        return `${headerBase64}.${payloadBase64}.${signature}`;
    }

    private _verifyJWTToken(token: string): boolean {
        const parts = token.split('.');
        if (parts.length !== 3) return false;

        const signature = this._base64url(HmacSHA256(`${parts[0]}.${parts[1]}`, this._secret));
        return signature === parts[2];
    }

    private _decodeJWT(token: string): any {
        const payload = token.split('.')[1];
        return JSON.parse(Utf8.stringify(Base64.parse(payload)));
    }

    private _base64url(source: any): string {
        let encodedSource = Base64.stringify(source);
        return encodedSource.replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
    }
}
