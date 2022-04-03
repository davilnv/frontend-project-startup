import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StartupService } from '../startup.service';

@Component({
  selector: 'app-startup-datail',
  templateUrl: './startup-datail.component.html',
  styleUrls: ['./startup-datail.component.css']
})
export class StartupDatailComponent implements OnInit {

  id: String = '';

  startups: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private startupService: StartupService
  ) { 
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.listStartup(this.id);
  }

  listStartup(id: String) {
    this.startupService.listByIdStartup(id).subscribe(data => this.startups = data);
  }

}
