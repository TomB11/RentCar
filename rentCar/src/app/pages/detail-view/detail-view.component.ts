import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-detail-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss'
})
export class DetailViewComponent implements OnInit {
  carName = ''
  carModel = ''
  carStatus = ''
  carPhoto = ''

  constructor(public http: HttpClient, public api: ApiService) {}

  ngOnInit(): void {
  }
}
