import { Routes } from '@angular/router';
import { Hello } from './initial/hello/hello';
import { Lista } from './initial/lista/lista';
import { HelloGuard } from './initial/hello/hello.guard';
import { Forms } from './initial/forms/forms';

export const routes: Routes = [
  {path: 'hello', component: Hello, canActivateChild:[HelloGuard],
    children:[
        {path: 'lista', component: Lista}
      ]
  },{path: 'lista', component: Lista},
    {path: 'forms', component: Forms}

];
