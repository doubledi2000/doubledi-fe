import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import ('./module/auth/auth.module').then(m => m.AuthModule)
    }, {
        path: 'welcome',
        loadChildren: () => import ('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
    }, {
        path: 'room',
        loadChildren: () => import ('./module/business/business.module').then(m => m.BusinessModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
