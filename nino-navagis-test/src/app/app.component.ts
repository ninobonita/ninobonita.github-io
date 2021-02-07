import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
   
var cebuCity = {lat: 10.307655, lng: 123.8917437, zom: 15 };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  markers: marker[] = [];

  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }
  
  ngOnInit() {
    this.latitude = cebuCity.lat;
    this.longitude = cebuCity.lng;
    this.zoom = cebuCity.zom;

    this.mapsAPILoader.load().then(() => {
      

      var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: cebuCity.lat, lng: cebuCity.lng},
        zoom: cebuCity.zom
      });

      var service = new google.maps.places.PlacesService(map);
      console.log("Service created - NDB");
      
      service.nearbySearch({
        location : cebuCity,
        radius : 5500,
        type : 'restaurant'
      }, this.callback.bind(this));

    });
  }
 

  private callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {

          this.markers.push({
            lat: results[i].geometry.location.lat(),
            lng: results[i].geometry.location.lng(),
            label: results[i].name,
            draggable: true
          });
          
            console.log("Marker Created - NDB: " + results[i].name);
            console.log("Marker Created - NDB: " + results[i].rating);
            console.log("Marker Created - NDB: " + results[i].geometry.location);
            console.log("Marker Created - NDB: " + results[i].geometry.location.lat());
            console.log("Marker Created - NDB: " + results[i].geometry.location.lng());
        }
    }
  }

  

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}