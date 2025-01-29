import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import {
  ALGEBRA_ANALYSIS_DETAILS, BIOLOGY_DETAILS, CHEMISTRY_DETAILS,
  ENGLISH_DETAILS, GEOGRAPHY_DETAILS, GEOMETRY_DETAILS,
  INFORMATICS_DETAILS, KAZAKH_LANGUAGE_DETAILS,
  KAZAKHSTAN_HISTORY_DETAILS, MATHEMATICS_DETAILS, NATURAL_SCIENCE_DETAILS,
  PHYSICS_DETAILS, RUSSIAN_LANGUAGE_DETAILS, SELF_KNOWLEDGE_DETAILS
} from './detail-data.component';

export const SUBJECT_DETAILS = {
  mathematics: MATHEMATICS_DETAILS,
  kazakh_language: KAZAKH_LANGUAGE_DETAILS,
  informatics: INFORMATICS_DETAILS,
  kazakhstan_history: KAZAKHSTAN_HISTORY_DETAILS,
  physics: PHYSICS_DETAILS,
  natural_science: NATURAL_SCIENCE_DETAILS,
  self_knowledge: SELF_KNOWLEDGE_DETAILS,
  russian_language: RUSSIAN_LANGUAGE_DETAILS,
  biology: BIOLOGY_DETAILS,
  geography: GEOGRAPHY_DETAILS,
  algebra_analysis: ALGEBRA_ANALYSIS_DETAILS,
  geometry: GEOMETRY_DETAILS,
  english: ENGLISH_DETAILS,
  chemistry: CHEMISTRY_DETAILS,
  // algebra: ALGEBRA_DETAILS,
  // teaching_literacy: TEACHING_LITERACY_DETAILS,
  // surrounding_world: SURROUNDING_WORLD_DETAILS,
  // music: MUSIC_DETAILS,
  // technology: TECHNOLOGY_DETAILS,
  // literary_reading: LITERARY_READING_DETAILS,
  // kazakh_literature: KAZAKH_LITERATURE_DETAILS,
  // russian_literature: RUSSIAN_LITERATURE_DETAILS,
  // world_history: WORLD_HISTORY_DETAILS,
};

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  subject!: string;
  grade!: string;
  themeId!: string;
  theme: { id: string; title: string; duration: number; images: string[] } | undefined;
  currentImages: string[] = [];
  currentLanguage: string = 'ru';
  currentImageIndex: number = 0;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    this.subject = this.route.snapshot.params['subject'];
    this.grade = this.route.snapshot.params['grade'];
    this.themeId = this.route.snapshot.params['theme'];
    this.currentLanguage = this.translocoService.getActiveLang() || 'ru';
    this.translocoService.langChanges$.subscribe((lang) => {
      this.currentLanguage = lang;
      this.updateImages();
    });

    if (SUBJECT_DETAILS[this.subject] && SUBJECT_DETAILS[this.subject][this.grade]) {
      this.theme = SUBJECT_DETAILS[this.subject][this.grade].find((t) => t.id === this.themeId);
      this.updateImages();
    }
  }

  updateImages(): void {
    if (!this.theme) {
      this.currentImages = [];
      return;
    }

    const subjectsWithLanguageSpecificImages = [
      'teaching_literacy',
      'mathematics',
      'natural_science',
      'surrounding_world',
      'music',
      'self_knowledge',
      'technology',
      'literary_reading',
      'kazakh_language',
      'kazakh_literature',
      'russian_language',
      'russian_literature',
      'physics',
      'chemistry',
      'biology',
      'geography',
      'algebra',
      'algebra_analysis',
      'geometry',
      'english',
      'world_history',
      'kazakhstan_history',
      'informatics'
    ];

    if (subjectsWithLanguageSpecificImages.includes(this.subject)) {
      const matchingImages = this.theme.images.filter((img) =>
          img.includes(`_${this.currentLanguage}`)
      );

      if (matchingImages.length > 0) {
        this.currentImages = matchingImages;
      } else {
        this.currentImages = [...this.theme.images];
      }
    } else {
      this.currentImages = [...this.theme.images];
    }

    this.currentImageIndex = 0;
  }

  get currentImage(): string {
    return this.currentImages[this.currentImageIndex] || '';
  }

  goToPreviousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  goToNextImage(): void {
    if (this.currentImageIndex < this.currentImages.length - 1) {
      this.currentImageIndex++;
    }
  }
}
