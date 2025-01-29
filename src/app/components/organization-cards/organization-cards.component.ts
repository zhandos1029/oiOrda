import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { OrganizationControlCard } from "./organization-control-cards";
import { TranslocoService } from "@ngneat/transloco";

@Component({
    selector: 'app-organization-cards',
    templateUrl: './organization-cards.component.html',
    styleUrls: ['./organization-cards.component.scss']
})
export class OrganizationCardsComponent implements OnInit {
    @Input() organizationControlCards: OrganizationControlCard[];
    filteredCards: OrganizationControlCard[] = [];
    selectedRoute: string;
    isModalOpen = false;
    minGrade: number = 1;
    maxGrade: number = 11;
    currentLanguage: string;
    selectedSubject: string = '';

    role: string = localStorage.getItem('role') ?? '';

    constructor(
        private router: Router,
        private _translocoService: TranslocoService
    ) {}

    ngOnInit(): void {
        this.currentLanguage = this._translocoService.getActiveLang() || 'ru';

        this._translocoService.langChanges$.subscribe((lang) => {
            this.currentLanguage = lang;
        });

        this.filterCards();
    }

    filterCards(): void {
        if (this.role === 'admin') {
            this.filteredCards = this.organizationControlCards;
        } else {
            const roleSubjectsMap: { [key: string]: string[] } = {
                primary_school: [
                    'teaching_literacy',
                    'mathematics',
                    'natural_science',
                    'surrounding_world',
                    'music',
                    'self_knowledge',
                    'technology',
                    'literary_reading'
                ],
                kazakh: ['kazakh_language', 'kazakh_literature'],
                russian: ['russian_language', 'russian_literature'],
                physics: ['physics'],
                chemistry: ['chemistry'],
                biology: ['biology'],
                geography: ['geography'],
                math: ['algebra', 'algebra_analysis', 'geometry'],
                english: ['english'],
                history: ['world_history', 'kazakhstan_history'],
                informatics: ['informatics']
            };


            const associatedSubjects = roleSubjectsMap[this.role] || [];
            this.filteredCards = this.organizationControlCards.filter(card =>
                associatedSubjects.some(subject => card.route.includes(subject))
            );
        }
    }

    openModal(card: OrganizationControlCard): void {
        this.selectedRoute = card.route;
        this.selectedSubject = card.route.split('/')[1];
        this.minGrade = card.minGrade || 1;
        this.maxGrade = card.maxGrade || 11;
        this.isModalOpen = true;
    }

    closeModal(): void {
        this.isModalOpen = false;
    }

    navigateToGrade(grade: number | 'card'): void {
        if (grade === 'card') {
            this.router.navigate([`${this.selectedRoute}/card`]);
        } else {
            this.router.navigate([`${this.selectedRoute}/${grade}`]);
        }
    }

}
