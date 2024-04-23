import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenu, ISubmenu } from '../../interfaces/IMenu';
import { onNavigateTo } from '../../utils/methods';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SidenavComponent {
  @Input() Menus: IMenu[] = [];
  @Input() isMenusLoading: boolean = true;
  @Output() onNavigated: EventEmitter<void> = new EventEmitter<void>();

  private _onNavigateTo = onNavigateTo();

  constructor() {
  }

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
