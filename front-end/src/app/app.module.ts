import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './menu/dropdown/dropdown.component';
import { PrevNextComponent } from './control/prev-next/prev-next.component';
import { EditorGridComponent } from './editor-grid/editor-grid.component';
import { ThumbnailsComponent } from './editor-grid/thumbnails/thumbnails.component';
import { TemplatesComponent } from './editor-grid/templates/templates.component';
import { TinymceComponent } from './editor-grid/tinymce/tinymce.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    PrevNextComponent,
    EditorGridComponent,
    ThumbnailsComponent,
    TemplatesComponent,
    TinymceComponent,
  ],
  imports: [
    BrowserModule,
    EditorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
