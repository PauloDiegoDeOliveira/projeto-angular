import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
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

  constructor() { }

  onClick() {
    this.clickButton.emit();
  }
}
