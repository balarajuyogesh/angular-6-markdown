import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import 'hammerjs'

import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './/material.module'
import { SidNavComponent } from './sid-nav/sid-nav.component'
import { LayoutModule } from '@angular/cdk/layout'

import { CitySearchComponent } from './city-search/city-search.component'
import { CitySearhTpldrivenComponent } from './city-searh-tpldriven/city-searh-tpldriven.component'

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    SidNavComponent,
    CitySearchComponent,
    CitySearhTpldrivenComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
