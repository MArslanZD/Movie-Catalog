import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { MovieApiService } from './movie-catalog/movie-api.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  entryComponents:[MovieCatalogComponent],
  declarations: [
    AppComponent,
    MovieCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCardModule
  ], 
  exports:[
    
  ],  
  providers: [
    MovieApiService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
