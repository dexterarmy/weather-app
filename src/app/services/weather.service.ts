import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  constructor(private http: HttpClient) {}
   getWeatherData(city: string): Observable<any>{

    // return this.http.get(environment.weatherApiBaseUrl,{
    //   headers: new HttpHeaders().set(environment.RapidApiHostHeaderName, environment.RapidApiHostHeaderValue).set(environment.RapidApiKeyHeaderName, environment.RapidApiKeyHeaderValue),
    //   params: new HttpParams().set('q', city).set('units', 'metric').set('mode', 'json')
    // })

    return this.http.get(`https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`);
    


   
  }

  getTempData(longitude:number, latitude:number): Observable<any>{

    return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`)

  }
}
