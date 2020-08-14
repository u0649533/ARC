import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import {ProductsComponent} from './products/products.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderViewComponent } from './order-view/order-view.component';
import {SearchComponent} from './search/search.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {CheckoutComponent} from './checkout/checkout.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminGuardGuard } from './admin-guard.guard';
import {AppComponent} from './app.component';
import { ObservableComponent } from './observable/observable.component';
import {ContactComponent} from './contact/contact.component';



const routes: Routes = [

    {path: '', component: ProductsComponent},
    {path: 'learning', component : TasksComponent },
    {path: 'observable', component: ObservableComponent},
    {path: 'checkout', component : CheckoutComponent },
    {path: 'contacts', component : ContactComponent },
    {path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard]},
    {path: 'products',  children: [
        {path: 'view', component : ProductViewComponent,canActivate: [AdminGuardGuard]},
        {path: 'edit', component : ProductEditComponent,canActivate: [AdminGuardGuard]},
        {path: 'view/:id', component: ProductIdComponent,canActivate: [AdminGuardGuard]},
    ]},
    {path: 'order/:id/:id2', component: OrderViewComponent,canActivate: [AdminGuardGuard]},
    {path: 'search', component: SearchComponent},

    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}