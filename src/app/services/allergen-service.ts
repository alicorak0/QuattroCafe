import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ROOT_URL } from '../constants/categoryConstants';
import { Allergen } from '../models/allergenModel';

@Injectable({
  providedIn: 'root',
})
export class AllergenService {
  private apiUrl = `${API_ROOT_URL}/allergens/`;

  constructor(private http: HttpClient) {}

  getAllAllergens(): Observable<{ data: Allergen[] }> {
    return this.http.get<{ data: Allergen[] }>(`${this.apiUrl}getall`);
  }
}
