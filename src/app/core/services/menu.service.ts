import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMenuResponse } from '../interfaces/IMenu';
import { BaseService } from './base.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseService {

  constructor(http: HttpClient, router: Router, toastrService: ToastrService) {
    super(http, router, toastrService);
  }

  public getMenu(params?: string): Observable<IMenuResponse>{
    return this.getData<IMenuResponse>(`menus${params ? `?PalavraChave=${params}&ResultadosExibidos=5` : ''}`, this.requestHeaders())
  }
}
