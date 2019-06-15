import { Injectable } from '@angular/core';
import {ApiService} from '@blog-services/api.service';
import {environment} from '@blog-environment/environment';

@Injectable()
export class BlogApiService extends ApiService {
  getBaseUrl(): string {
    return environment.apiBaseUrl;
  }
}
