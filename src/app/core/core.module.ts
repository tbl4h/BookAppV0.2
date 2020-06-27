import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestore
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
