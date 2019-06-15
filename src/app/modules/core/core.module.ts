import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ToastrModule} from 'ngx-toastr';
import {ApiService} from '@blog-services/api.service';
import {BlogApiService} from '@blog-services/blog-app-api.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    // StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    ToastrModule.forRoot()
  ],
  providers: [
    BlogApiService
  ],
  bootstrap: []
})
export class CoreModule {
}
