import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { HttpHandlerService } from './providers/http-handler.service';
import { NotesListComponent } from './post-login/notes-list/notes-list.component';

@NgModule({
    declarations: [AppComponent, SigninComponent, NavbarComponent, NotesListComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule],
    providers: [HttpHandlerService],
    bootstrap: [AppComponent],
})
export class AppModule {}
