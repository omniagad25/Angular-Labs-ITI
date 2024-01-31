import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';


export const routes: Routes = [
        {
            path:"",
            component: ProductDetailsComponent,
            title:"Home"
        },
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
            path: "product-view/:id",
            component: ProductViewComponent,
            title: "product view"
        },
        {
            path: "cart",
            component: CartViewComponent,
            title: "Products cart"
        },
        {
            path:"**",
            component: NotFoundComponent,
            title:"NotFound"
        },
        
    
];
