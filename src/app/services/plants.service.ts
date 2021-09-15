
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http:HttpClient) { }

public reports(){

  return this.http.get("https://run.mocky.io/v3/b1cde98f-6622-48ee-93dd-e29a7b7fe2df");

}
}
