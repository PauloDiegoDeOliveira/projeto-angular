import { Component, Input } from '@angular/core';
import { IMenu, ISubmenu } from '../../../../interfaces/IMenu';
import { onNavigateTo } from '../../../../utils/methods';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { CustomButtonComponent } from '../../../../shared/custom-button/custom-button.component';
// import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatMenuModule,
    CustomButtonComponent,
    // ToastrModule,
  ]
})
export class MenuButtonComponent {
  @Input() ButtonMenu: IMenu = {} as IMenu;

  private _onNavigateTo = onNavigateTo()

  constructor() {
  }

  onNavigate(menuButton: IMenu, menu?: ISubmenu) {
    if (menuButton.submenus.length <= 0) return this._onNavigateTo([menuButton.rota])
    else if (!menu) return null

    return this._onNavigateTo([`${menuButton.rota}/${menu?.rota}`])
  }
}
