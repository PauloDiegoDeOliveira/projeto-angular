import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http: HttpClient,
    private router: Router,
    private toastrService: ToastrService) { }

  protected URL_API: string = environment.urlApi;

  protected requestHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('user') || '{}')?.accessToken}`,
      })
    };
  }

  protected getData<T>(url: string, headers?: { headers: HttpHeaders }, toastr?: boolean): Observable<T> {
    return this.http.get<T>(`${this.URL_API}${url}`, headers)
      .pipe(
        catchError(err => this.errorHandler(err, toastr))
      );
  }

  protected getBlob<T>(url: string, headers?: { headers: HttpHeaders }, toastr?: boolean, response: string = 'json'): Observable<HttpResponse<Blob>> {
    return this.http.get<Blob>(`${this.URL_API}${url}`, { headers: headers?.headers, responseType: response as 'json', observe: 'response' })
      .pipe(
        catchError(err => this.errorHandler(err, toastr))
      );
  }

  protected postData<T>(url: string, body: any, headers?: { headers: HttpHeaders }): Observable<T> {
    return this.http.post<T>(`${this.URL_API}${url}`, body, headers)
      .pipe(
        catchError(err => this.errorHandler(err))
      );
  }

  protected putData<T>(url: string, body: any, headers?: { headers: HttpHeaders }): Observable<T> {
    return this.http.put<T>(`${this.URL_API}${url}`, body, headers)
      .pipe(
        catchError(err => this.errorHandler(err))
      );
  }

  protected deleteData<T>(url: string, id: string, headers?: { headers: HttpHeaders }, body?: any): Observable<T> {
    return this.http.delete<T>(`${this.URL_API}${url}/${id}`, { headers: headers?.headers, body: body })
      .pipe(
        catchError(err => this.errorHandler(err))
      );
  }

  protected toastrErrors(errors: ErrorResponse) {
    errors?.erros?.forEach(erro => this.toastrService.error(erro, 'Ocorreu um erro.'),
      {
        enableHtml: true
      });
  }

  private errorHandler(err: any, toastr: boolean = true) {

    if (err?.status === 401) {
      sessionStorage.clear();
      this.router.navigate(['/']);
    }

    (toastr && err?.error?.erros) && this.toastrErrors(err?.error);
    return throwError(() => err);
  }
}

interface ErrorResponse {
  erros: string[];
  sucesso: boolean;
}