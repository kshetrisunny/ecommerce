import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogdetailsComponent } from './pages/blogdetails/blogdetails.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { BidComponent } from './pages/bid/bid.component';
import { BargainComponent } from './pages/bargain/bargain.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'header' ,component: HeaderComponent},
  {path: 'footer' , component: FooterComponent},
  {path: 'product' , component: ProductComponent},
  {path: 'productdetails' , component: ProductdetailsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blogdetails', component: BlogdetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'bid', component: BidComponent},
  {path: 'bargain', component: BargainComponent},







  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
