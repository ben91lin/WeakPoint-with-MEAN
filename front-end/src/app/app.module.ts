import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
/** show */
import { ShowComponent } from './show/show.component';
import { PrevNextComponent } from './show/prev-next/prev-next.component';
/** edit-grid */
import { EditGridComponent } from './edit-grid/edit-grid.component';
import { ThumbnailsComponent } from './edit-grid/thumbnails/thumbnails.component';
import { TinymceComponent } from './edit-grid/tinymce/tinymce.component';
import { SidebarGridComponent } from './edit-grid/sidebar-grid/sidebar-grid.component';
import { TemplatesComponent } from './edit-grid/sidebar-grid/templates/templates.component';
import { PresentationMetaComponent } from './edit-grid/sidebar-grid/presentation-meta/presentation-meta.component';

console.log('TINYMCE_SCRIPT_SRC', TINYMCE_SCRIPT_SRC)
console.log(AppComponent)

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShowComponent,
    PrevNextComponent,
    EditGridComponent,
    TinymceComponent,
    ThumbnailsComponent,
    SidebarGridComponent,
    TemplatesComponent,
    PresentationMetaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EditorModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
