import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SearchComponent, ListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  viewVisible = ''

  showView(type: number) {
    this.viewVisible = type === 0 ? 'search' : 'list'
  }

  close() {
    this.viewVisible = ''
  }
}
