import { Component, OnInit } from '@angular/core';
import { StartupService } from '../startup.service';

@Component({
  selector: 'app-startup-listagem',
  templateUrl: './startup-listagem.component.html',
  styleUrls: ['./startup-listagem.component.css']
})
export class StartupListagemComponent implements OnInit {

  startups: Array<any> = [];

  constructor(private startupService: StartupService) { }

  ngOnInit(): void {
    this.listStartup();
  }

  listStartup() {
    this.startupService.listStartup().subscribe(data => this.startups = data);
  }

}
