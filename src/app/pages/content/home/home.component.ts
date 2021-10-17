import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Title} from '@angular/platform-browser';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherData!: any;

  constructor(private titleService: Title, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Home');
    this.getWeatherData();
  }

  getWeatherData() {
    let position = "Taipei";
    let url = `${environment.weatherDomain}?q=${position}&appid=${environment.weatherAppId}&lang=${environment.language}&units=${environment.units}`;
    this.http.get<any>(url, {observe: 'response'}).subscribe(res => {
      console.log(res.body);
      let status: number = res.status;
      let response: HttpResponse<any> = res;
      let statusText: string = res.statusText;
      let headers: HttpHeaders = res.headers;
      if (status == 200) {
        this.weatherData = res.body;
      } else {
        alert("Error");
      }
    });
  }

}
