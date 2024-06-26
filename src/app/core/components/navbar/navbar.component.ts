import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { onNavigateTo } from '../../utils/methods';
import { Router } from '@angular/router';
import { IMenu } from '../../interfaces/IMenu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() Menus: IMenu[] = [];
  @Input() isMenusLoading: boolean = true;
  @Output() toggleSidenav: EventEmitter<undefined> = new EventEmitter<undefined>();

  public name: string = '';
  private _onNavigateTo = onNavigateTo()

  constructor(public router: Router) { }
  backBtnRoutes = () => ['/informacoes', '/editar'].some(route => this.router.url.includes(route));

  ngOnInit(): void {
    this.name = JSON.parse(sessionStorage.getItem('user') || '{}')?.nome;
  }

  onSidenav() {
    this.toggleSidenav.emit();
  }

  logout() {
    sessionStorage.clear();
    this._onNavigateTo(['login'])
  }

  return() {
    window.history.back();
  }
}
