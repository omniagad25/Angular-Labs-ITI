import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


export const routes: Routes = [
        {
            path:"login",
            component:LoginComponent,
            title:"Login"
        },
        {
            path:"register",
            component:RegisterComponent,
            title:"Register"
        },
        {
            path:"home",
            component: ProductDetailsComponent,
            title:"Home"
        },
        {
            path:"**",
            component: NotFoundComponent,
            title:"NotFound"
        },
        
    
];
