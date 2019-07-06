import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export abstract class ApiService {
  constructor(protected http: HttpClient) {
  }

  static getToken(): string {
    // return localStorage.getItem('auth_token');
    return 'token';
  }

  private static buildParams(data: any): HttpParams {
    let params = new HttpParams();
    if (data) {
      for (const key of Object.keys(data)) {
        console.log('KEY', key);
        // Beware .append is not mutable operation
        params = params.append(key, data[key]);
      }
    }
    return params;
  }

  private static _buildHeaders(useAuthHeaders: boolean, headers?: HttpHeaders): HttpHeaders {
    if (!useAuthHeaders) {
      return headers;
    }
    let mutatedHeaders: HttpHeaders;

    if (headers) {
      mutatedHeaders = headers;
    } else {
      mutatedHeaders = new HttpHeaders();
    }
    return mutatedHeaders.set('Authorization', this.getToken());
  }

  abstract getBaseUrl(): string;

  get<T>(url: string, useAuthHeaders: boolean, data?: any, headers?: HttpHeaders, useBaseUrl: boolean = true,
         responseType?: string): Observable<T> {
    console.log('[api.service] get', url, data);
    let options: any = {
      params: data,
      headers: ApiService._buildHeaders(useAuthHeaders, headers),
    };
    if (responseType) {
      options = {
        ...options,
        responseType
      };
    }
    // @ts-ignore
    return this.http.get<T>(this.getBaseUrl() + url, options);
  }

  post<T>(url: string, useAuthHeaders: boolean, data: any, headers?: HttpHeaders, useBaseUrl: boolean = true,
          responseType?: string, withCredentials = false): Observable<T> {
    let options: any = useAuthHeaders ? {
      headers: ApiService._buildHeaders(useAuthHeaders, headers)
    } : {};
    if (responseType || withCredentials) {
      options = {
        ...options,
        responseType,
        withCredentials
      };
    }
    // @ts-ignore
    return this.http.post<T>(useBaseUrl ? this.getBaseUrl() + url : url, data, options);
  }

  put<T>(url: string, useAuthHeaders: boolean, data: any, headers?: HttpHeaders, useBaseUrl: boolean = true, responseType?: string, withCredentials = false): Observable<T> {
    let options: any = useAuthHeaders ? {
      headers: ApiService._buildHeaders(useAuthHeaders, headers)
    } : {};
    if (responseType || withCredentials) {
      options = {
        ...options,
        responseType,
        withCredentials
      };
    }
    // @ts-ignore
    return this.http.put<T>(useBaseUrl ? this.getBaseUrl() + url : url, data, options);
  }

  delete<T>(url: string, useAuthHeaders: boolean, headers?: HttpHeaders, useBaseUrl: boolean = true,
            responseType?: string, withCredentials = false): Observable<T> {
    let options: any = useAuthHeaders ? {
      headers: ApiService._buildHeaders(useAuthHeaders, headers)
    } : {};
    if (responseType || withCredentials) {
      options = {
        ...options,
        responseType,
        withCredentials
      };
    }
    // @ts-ignore
    return this.http.delete<T>(useBaseUrl ? this.getBaseUrl() + url : url, options);
  }
  public handleError(httpErrorResponse: HttpErrorResponse) {
    return throwError({ error: 'Error Occurred'});
  }

}
