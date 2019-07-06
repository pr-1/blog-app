import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ToastrModule} from 'ngx-toastr';
import {ApiService} from '@blog-services/api.service';
import {BlogApiService} from '@blog-services/blog-app-api.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index.reducer';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    ToastrModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: []
})
export class CoreModule {
}
