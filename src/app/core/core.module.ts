import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuButtonComponent } from './components/navbar/components/menu-button/menu-button/menu-button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MenuButtonComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTreeModule,
    HttpClientModule,
    MatListModule,
    RouterModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MenuButtonComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidenavComponent
  ],
})
export class CoreModule { }
