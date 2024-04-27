import { Component, Input } from '@angular/core';
import { onNavigateTo } from '../../../../../utils/methods';
import { IMenu, ISubmenu } from '../../../../../interfaces/IMenu';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent {
  @Input() ButtonMenu: IMenu = {} as IMenu;

  private _onNavigateTo = onNavigateTo()

  constructor() { }

  onNavigate(menuButton: IMenu, menu?: ISubmenu) {
    if (menuButton.submenus.length <= 0) return this._onNavigateTo([menuButton.rota])
    else if (!menu) return null

    return this._onNavigateTo([`${menuButton.rota}/${menu?.rota}`])
  }
}
