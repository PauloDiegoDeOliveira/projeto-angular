import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    CommonModule,
  ]
})
export class CustomButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' | 'white' | '' = 'primary';
  @Input() disabled: boolean = false;
  @Input() buttonStyleType: 'raised' | 'stroked' | 'flat' = 'raised';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() icon: string = '';
  @Input() iconEnd: string = '';
  @Input() isFull: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() mobile: boolean = false;
  @Input() text: string = '';

  @Output() clickButton: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  onClick() {
    this.clickButton.emit();
  }

}
