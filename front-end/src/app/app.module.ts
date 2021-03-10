import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './menu/dropdown/dropdown.component';
import { PrevNextComponent } from './show/prev-next/prev-next.component';
/** edit-grid */
import { EditGridComponent } from './edit-grid/edit-grid.component';
import { ThumbnailsComponent } from './edit-grid/thumbnails/thumbnails.component';
import { TemplatesComponent } from './edit-grid/templates/templates.component';
import { TinymceComponent } from './edit-grid/tinymce/tinymce.component';

console.log('TINYMCE_SCRIPT_SRC', TINYMCE_SCRIPT_SRC)

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    PrevNextComponent,
    EditGridComponent,
    ThumbnailsComponent,
    TemplatesComponent,
    TinymceComponent,
  ],
  imports: [
    BrowserModule,
    EditorModule,
    AppRoutingModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
