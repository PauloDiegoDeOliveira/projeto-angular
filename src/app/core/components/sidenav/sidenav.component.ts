import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { onNavigateTo } from '../../utils/methods';
import { IMenu, ISubmenu } from '../../interfaces/IMenu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ]
})
export class SidenavComponent {
  @Input() Menus: IMenu[] = [];
  @Input() isMenusLoading: boolean = true;
  @Output() onNavigated: EventEmitter<void> = new EventEmitter<void>();

  private _onNavigateTo = onNavigateTo();

  constructor() { }

  onNavigate(menuButton: IMenu, menu?: ISubmenu) {
    this.onNavigated.emit();
    if (menuButton.submenus.length <= 0) return this._onNavigateTo([menuButton.rota])
    else if (!menu) return null
    return this._onNavigateTo([`${menuButton.rota}/${menu?.rota}`])
  }

  logout() {
    sessionStorage.clear();
    this.onNavigated.emit();
    this._onNavigateTo(['login']);
  }
}
