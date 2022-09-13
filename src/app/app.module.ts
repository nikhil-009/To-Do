import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { AboutComponent } from './about/about.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Users/dashboard/dashboard.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './Store/app.state';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    WhatsNewComponent,
    AboutComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducer),
    IconsModule,
    AppRoutingModule,
    DateInputsModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
    BrowserAnimationsModule,
    IndicatorsModule,
    ButtonsModule,
    LabelModule,
    InputsModule,
    DialogsModule,
    NotificationModule,
    LayoutModule,
    DropDownsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
