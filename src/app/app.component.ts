import { Component } from '@angular/core';
import { FooterComponent } from './core/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { IMenu, IMenuResponse } from './core/interfaces/IMenu';
import { Router, RouterModule, RoutesRecognized } from '@angular/router';
import { MenuService } from './core/services/menu.service';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HttpClientModule, 
    FooterComponent,
    CommonModule,
    SidenavComponent,
    NavbarComponent,
    MatSidenavModule,
    RouterModule,
  ]
})
export class AppComponent {
  title = 'projeto-angular';
  public isNavbar: boolean = false;
  public Menus: IMenu[] = [];
  public isMenusLoading: boolean = true;

  constructor(private router: Router,
    private menuService: MenuService) {
    this.verifyRoute();
  }

  onGetMenu() {
    this.menuService.getMenu().pipe().subscribe({
      next: (menu: IMenuResponse) => this.Menus = menu.dados.pagina,
      error: () => {
        this.router.navigate(['/login']);
        this.isMenusLoading = false;
      },
      complete: () => { this.isMenusLoading = false; }
    })
  }

  verifyRoute() {
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild;
        this.isNavbar = route?.data['navbar'] ?? true;
        if(route?.routeConfig?.path == 'login') this.Menus = [];
        if (this.isNavbar && this.Menus.length <= 0) this.onGetMenu();
      }
    })
  }
  
}
