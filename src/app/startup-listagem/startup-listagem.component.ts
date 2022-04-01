import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startup-listagem',
  templateUrl: './startup-listagem.component.html',
  styleUrls: ['./startup-listagem.component.css']
})
export class StartupListagemComponent implements OnInit {

  startups = [
    { 
      id_startup: '1', 
      name: 'Startup', 
      location: 'Pernambuco, Brazil', 
      numberEmployers: '10',
      investmentseries: 'Angel' 
    },
    { 
      id_startup: '2', 
      name: 'Startup2', 
      location: 'Pernambuco, Brazil', 
      numberEmployers: '10',
      investmentseries: 'Angel' 
    },
    { 
      id_startup: '3', 
      name: 'Startup3', 
      location: 'Pernambuco, Brazil', 
      numberEmployers: '10',
      investmentseries: 'Angel' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
