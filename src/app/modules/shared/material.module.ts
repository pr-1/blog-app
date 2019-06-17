import {
  MatAutocompleteModule,
  MatButtonModule, MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatDialogModule, MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule, MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
// import {MatSnackBarModule} from '../../../node_modules/@angular/material/typings/esm5/snack-bar';
// import {MatButtonToggleModule} from '../../../node_modules/@angular/material/typings/esm5/button-toggle';


const materialModules = [
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  // MatMenuModule,
  MatCardModule,
  // MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatSliderModule,
  MatDialogModule,
  MatRippleModule,
  MatSelectModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  // MatRadioModule,
  // MatChipsModule,
  MatAutocompleteModule,
  // MatProgressBarModule,
  // MatSlideToggleModule,
  MatSidenavModule,
  MatDatepickerModule,
  // MatNativeDateModule,
  // MatExpansionModule,
  // MatGridListModule,
  HttpClientModule,
  MatSelectModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports     : materialModules,
  exports     : materialModules
})
export class MaterialModule {
}
