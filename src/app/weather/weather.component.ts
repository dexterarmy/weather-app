import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import {ThemePalette} from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';

  reactiveForm: FormGroup;
    
  constructor(private weatherService: WeatherService){}

  
  longitude: number;
  latitude: number;
  weather;
  location; string;
 

  ngOnInit():void{

    this.reactiveForm = new FormGroup({
      city: new FormControl('')
    })

    
    this.weatherData('jaipur');
    

  }

 

  onSubmit(){
    
    
    this.weatherData((<FormControl>this.reactiveForm.get('city'))?.value);

    this.reactiveForm.reset();
  }

  private weatherData(city: string){
    this.weatherService.getWeatherData(city).subscribe({
      next: response => {
        this.longitude = response[0]?.lon;
        this.latitude = response[0]?.lat;
        this.location = response[0]?.display_name.split(',')[0];

        console.log(this.location);
        if(this.location){
        this.weatherService.getTempData(this.longitude, this.latitude).subscribe({
          next: response => {
            this.weather = response;
            console.log(this.weather);
          }
        })
      } 
      }
    })
  }


}
