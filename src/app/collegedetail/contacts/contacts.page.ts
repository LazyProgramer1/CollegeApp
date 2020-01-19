import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import *as Mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  map: Mapboxgl.Map;
 
  constructor() { }

  ngOnInit() {

    Mapboxgl.accessToken = environment.mapboxkey;

    this.map = new Mapboxgl.Map({
    container: 'map-mapbox',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [85.3169268, 27.6844185], // LNG, LAT
    zoom: 15.07 // starting zoom
  });
    this.createMarker(85.3169268, 27.6844185);
    this.map.addControl(new Mapboxgl.FullscreenControl());
  }

  createMarker(lng:number, lat:number){

    const marker = new Mapboxgl.Marker({
      draggable: false
      })
      .setLngLat([lng, lat])
      .addTo(this.map);

  }
  

}
