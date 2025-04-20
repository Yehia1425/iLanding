import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path :'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home Page'},
    {path:'about', component:AboutComponent , title:'About Page'},
    {path:'features', component:FeaturesComponent , title:'Features Page'},
    {path:'services', component:ServicesComponent , title:'Services Page'},
    {path:'pircing', component:PricingComponent , title:'Pircing Page'},
    {path:'contact', component:ContactComponent , title:'Contact Page'},
];
