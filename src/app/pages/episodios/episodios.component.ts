import { Component } from '@angular/core';
import { EpisodiosService } from 'src/app/shared/services/episodios.service';
import {MatTableDataSource} from '@angular/material/table';
import { Episodios } from 'src/app/shared/models/Episodios';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss'],
  providers: [DatePipe]
})
export class EpisodiosComponent {
  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode', 'created'];
  dataSource = new MatTableDataSource<Episodios>();

  constructor(private srvEpisodios: EpisodiosService) { }

  ngOnInit() {
    this.getAllEpisodios();
  }

  getAllEpisodios() {
    this.srvEpisodios.getAll().subscribe(
      (data: Episodios[]) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Error al obtener los episodios:', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
