import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {
  @Input() title: string = '';
  breadcrumbs: Array<{ label: string, path: string }> = [];
  currentTitle: string = '';

  private titleMappings: { [key: string]: string } = {
    'main/page': 'ГЛАВНАЯ',
    'main/about': 'О НАС',
    'main/subjects': 'ПРЕДМЕТЫ',
    'instruments/news': 'НОВОСТИ',
    'instruments/setting': 'НАСТРОЙКА',
    'instruments/contacts': 'КОНТАКТЫ',
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setBreadcrumbs();
    this.currentTitle = this.titleMappings[this.title] || '';
  }

  setBreadcrumbs(): void {
    const urlSegments = this.title.split('/').filter(segment => segment);
    let currentPath = '';

    this.breadcrumbs.push({ label: 'Главная', path: '/' });

    urlSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      const label = this.titleMappings[currentPath] || segment.replace(/-/g, ' ');

      if (index > 0) {
        this.breadcrumbs.push({
          label: label,
          path: currentPath
        });
      }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
