import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserAnimationsModule,
    // StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule {
}
