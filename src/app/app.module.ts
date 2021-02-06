import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationsService } from './services/operations.service';
import { ErrorMessageDirective } from './error-message.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ErrorMessageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
