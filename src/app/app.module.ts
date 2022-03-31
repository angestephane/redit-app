import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Module primeNg
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing-module/app-routing-module.module';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [AppComponent, ArticleComponent],
  imports: [BrowserModule, InputTextModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
