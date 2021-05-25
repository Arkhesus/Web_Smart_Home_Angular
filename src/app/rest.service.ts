import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map} from 'rxjs/operators';


const endpoint_category = "http://localhost:8000/api/category"
const endpoint_room = "http://localhost:8000/api/room"
const endpoint_sensor = "http://localhost:8000/api/sensor"

export interface Category {
  name : string
}

export interface Room {
  name : string
}

export interface Sensor {
  name: string,
  Category : Category,
  Room : Room
}


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { } 
  
  
  getCategory(): Observable<any> {
    return this.http.get<Category>(endpoint_category);
  }

  getRoom(): Observable<any> {
    return this.http.get<Room>(endpoint_room);
  }

  getSensors(): Observable<any> {
    return this.http.get<Sensor>(endpoint_sensor);
  }

  getSensor(name :string): Observable<any> {
    return this.http.get<Sensor>(endpoint_sensor + '/' + name);
  }

  getidRoom(name :string): Observable<any> {
    console.log("+++", name)
    return this.http.get<Sensor>(endpoint_room + '/' + name);
  }

  getidCategory(name :string): Observable<any> {
    console.log("+++", name)
    return this.http.get<Sensor>(endpoint_category + '/' + name);
  }

  filter(category :string, room:string): Observable<any> {
    return this.http.get<Sensor>('http://localhost:8000/api/filter' + '/' + category +'/' + room);
  }

  addSensor(sensor : Sensor): Observable<any>{
    return this.http.post(endpoint_sensor, sensor);
  }

  addRoom(room : Room): Observable<any>{
    return this.http.post(endpoint_room, room);
  }

  deleteRoom(room : Room): Observable<any>{
    return this.http.request('delete', endpoint_room, { body: room })
  }

  addCategory(category : Category): Observable<any>{
    return this.http.post(endpoint_category, category);
  }

  deleteCategory(category : Category): Observable<any>{
    return this.http.request('delete', endpoint_category, { body: category })
  }

  deleteSensor(sensor : Sensor): Observable<any>{
    return this.http.request('delete', endpoint_sensor, { body: sensor })
  }

  putSensor(sensor : Sensor): Observable<any>{
    return this.http.put( endpoint_sensor, sensor )
  }

}

// <> 