
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  ],
  providers: [
    { provide: 'components', useValue: [AppComponent], multi: true }
  ],
  entryComponents: [AppComponent]
})
export class AppModule { }
