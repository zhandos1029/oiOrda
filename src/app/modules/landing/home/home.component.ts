import { Component, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import {translate} from "@ngneat/transloco";

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    styleUrls  : ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent {
    yearlyBilling: boolean = true;
    constructor(private router: Router) {}

    ngOnInit(): void {
    }
    navigateTo(route: string): void {
        this.router.navigate([route]);
    }
}
