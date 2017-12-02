import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CKEditorComponent } from './ckeditor.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import {CKEditorModule} from 'ng2-ckeditor';
import { EditorRoutes } from './editor.routes';

@NgModule({
  declarations: [
	CKEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    RouterModule.forChild(EditorRoutes)
  ],
  exports:[
    CKEditorComponent
  ]
})
export class EditorModule { }