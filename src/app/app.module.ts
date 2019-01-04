import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { addUserReducer } from './user/store/add-user.reducers';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({addUser: addUserReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
