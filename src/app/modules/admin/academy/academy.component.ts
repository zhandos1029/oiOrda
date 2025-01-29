import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { SUBJECTS_DATA } from "./subjects-data";
import { FuseNavigationService, FuseVerticalNavigationComponent } from "../../../../@fuse/components/navigation";

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss']
})
export class AcademyComponent implements OnInit {
  subject!: string;
  grade!: string;
  filters: string[] = [];
  topics: { filter: string; title: string }[] = [];
  filteredTopics: { filter: string; title: string }[] = [];
  selectedFilter: string = 'all';
  searchQuery: string = '';
  currentLanguage: string = 'ru';

  constructor(
      private route: ActivatedRoute,
      private _fuseNavigationService: FuseNavigationService,
      private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    this.toggleMainNavigation();
    this.currentLanguage = this.translocoService.getActiveLang() || 'ru';
    this.translocoService.langChanges$.subscribe((lang) => {
      this.currentLanguage = lang;
      this.loadData();
    });

    this.subject = this.route.snapshot.params['subject'];
    this.grade = this.route.snapshot.params['grade'];

    this.loadData();
  }

  toggleMainNavigation(): void {
    const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>('mainNavigation');
    if (navigation) {
      navigation.close();
    } else {
      console.error('Navigation component not found');
    }
  }

  loadData(): void {
    if (this.grade === 'card' && SUBJECTS_DATA[this.subject]?.card) {
      const cardData = SUBJECTS_DATA[this.subject].card;
      this.filters = cardData.filters.map(filterKey =>
          this.translocoService.translate(filterKey, {}, this.currentLanguage)
      );
      this.topics = cardData.topics.map(topic => ({
        filter: this.translocoService.translate(topic.filter, {}, this.currentLanguage),
        title: this.translocoService.translate(topic.title, {}, this.currentLanguage),
      }));
    } else if (SUBJECTS_DATA[this.subject] && SUBJECTS_DATA[this.subject][this.grade]) {
      const data = SUBJECTS_DATA[this.subject][this.grade];
      this.filters = data.filters.map(filterKey =>
          this.translocoService.translate(filterKey, {}, this.currentLanguage)
      );
      this.topics = data.topics.map(topic => ({
        filter: this.translocoService.translate(topic.filter, {}, this.currentLanguage),
        title: this.translocoService.translate(topic.title, {}, this.currentLanguage),
      }));
    } else {
      console.error(`Данные для предмета ${this.subject} и класса ${this.grade} не найдены.`);
    }

    this.filteredTopics = [...this.topics];
  }

  filterTopics(): void {
    this.filteredTopics = this.topics.filter((topic) => {
      const matchesFilter =
          this.selectedFilter === 'all' || topic.filter === this.selectedFilter;
      const matchesSearch =
          topic.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }
}
