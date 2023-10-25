import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { CoreModule } from './core/core.module';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ItemsService } from './services/items.service';
import { DataEffects } from './store/effects/data.effect';
import { dataReducer } from './store/reducers/data.reducer';

const componets = [
  MainPageComponent,
  DetailPageComponent,
  TableComponent,
  NavComponent,
  ContentPageComponent,
];
@NgModule({
  declarations: [AppComponent, componets],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({ data: dataReducer }),
    EffectsModule.forRoot([DataEffects]),
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
