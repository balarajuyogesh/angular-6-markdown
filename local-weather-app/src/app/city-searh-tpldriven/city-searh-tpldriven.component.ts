import { Component, OnInit } from '@angular/core'
import { NgModel, Validators } from '@angular/forms'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-city-searh-tpldriven',
  templateUrl: './city-searh-tpldriven.component.html',
  styleUrls: ['./city-searh-tpldriven.component.css'],
})
export class CitySearhTpldrivenComponent implements OnInit {
  model = {
    search: '',
  }
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  doSearch(searchValue) {
    const userInput = searchValue.split(',').map(s => s.trim())
    this.weatherService
      .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
      .subscribe(data => console.log(data))
  }
}
