import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TopicsComponent } from './topics/topics.component';
import { CalloutComponent } from './callout/callout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RoutingModule } from './routing/routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    GalleryComponent,
    TopicsComponent,
    CalloutComponent,
    LandingPageComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
