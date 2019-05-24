import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NguCarouselModule } from '@ngu/carousel';
import { ProductComponent } from './pages/product/product.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogdetailsComponent } from './pages/blogdetails/blogdetails.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { BidComponent } from './pages/bid/bid.component';
import { BargainComponent } from './pages/bargain/bargain.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductdetailsComponent,
    BlogComponent,
    BlogdetailsComponent,
    ContactComponent,
    WishlistComponent,
    CartComponent,
    CheckoutComponent,
    BidComponent,
    BargainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StickyNavModule,
    NguCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_VTzsGU_NUYfJ0cWBYiFuf3f3eKWxYH4'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
