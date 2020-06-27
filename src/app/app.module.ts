import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBettingFormComponent } from './_components/create-betting-form/create-betting-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { ForkListComponent } from './_components/fork-list/fork-list.component';
import { AlertComponent } from './_components/alert/alert.component';
import { AlertService } from 'src/app/_services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateBettingFormComponent,
    ForkListComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    CoreModule
  ],
  providers: [
    AlertService,
  ],
  bootstrap: [AppComponent,

  ]
})
export class AppModule { }
