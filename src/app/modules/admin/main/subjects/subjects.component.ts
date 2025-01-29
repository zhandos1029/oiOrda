import {Component, OnInit} from '@angular/core';
import {
    OrganizationControlCard,
    OrganizationControlCards
} from "../../../../components/organization-cards/organization-control-cards";
import {Router} from "@angular/router";

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
    organizationControlCards: OrganizationControlCard[] = OrganizationControlCards
    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    navigateTo(route: string): void {
        this.router.navigate([route]);
    }
}
