import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-grade-selection-modal',
  templateUrl: './grade-selection-modal.component.html',
  styleUrls: ['./grade-selection-modal.component.scss']
})
export class GradeSelectionModalComponent {
  @Input() isOpen: boolean = false;
  @Input() minGrade: number = 1;
  @Input() maxGrade: number = 11;
  @Output() selectGrade = new EventEmitter<number>();
  @Output() closeModal = new EventEmitter<void>();
  @Input() subject: string = '';

  get grades(): (number | 'card')[] {
    const grades = Array.from({ length: this.maxGrade - this.minGrade + 1 }, (_, i) => i + this.minGrade);
    return this.subjectHasCards ? [...grades, 'card'] : grades;
  }

  get subjectHasCards(): boolean {
    return this.subject === 'kazakhstan_history' || this.subject === 'geography' || this.subject === 'world_history';
  }

  onSelectGrade(grade: number): void {
    this.selectGrade.emit(grade);
    this.closeModal.emit();
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
