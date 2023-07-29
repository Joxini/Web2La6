import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Episodios } from '../models/Episodios';

@Injectable({
  providedIn: 'root',
})
export class EpisodiosService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Episodios[]> {
    return this.http.get<Episodios[]>('https://rickandmortyapi.com/api/episode').pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }
}

