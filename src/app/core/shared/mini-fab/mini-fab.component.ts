import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mini-fab',
  templateUrl: './mini-fab.component.html',
  styleUrls: ['./mini-fab.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class MiniFabComponent {

  @Input() public icon!: string;
  @Input() public color: 'primary' | 'accent' | 'warn' | '' = '';
  @Input() public ariaLabel!: string;
  @Input() public disable: boolean = false;
  @Input() public isLoading: boolean = false;
  @Input() public title: string = '';

  @Output() public clickButton = new EventEmitter<any>();

  constructor() {
  }

  onClick() {
    this.clickButton.emit();
  }

}
