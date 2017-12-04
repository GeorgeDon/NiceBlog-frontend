import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule ,Http} from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import {appRoutes} from './app.routes';
import { MainComponent } from './main/main.component';
import {HttpService } from './service/http/http.service'
// import {CKEditorComponent } from './editor/ckeditor.component';
import {EditorModule } from './editor/editor.module';
import {PaperListModule } from './paperlist/paperlist.module';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),    
    ToastModule.forRoot(),
    RouterModule.forRoot(appRoutes), 
    FormsModule,
    EditorModule,
    PaperListModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
