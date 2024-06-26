import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



if( !navigator.geolocation){
   alert('navegador no soporta la eolocation')
   throw new Error ('Navegador no soporta la geolocalitation');

}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
