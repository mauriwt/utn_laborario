import { Component, OnInit,Input } from '@angular/core';
declare var $;
@Component({
  selector: 'app-tabpersona',
  templateUrl: './tabpersona.component.html'
})
export class TabPersonaComponent implements OnInit {

  public tab:any;
  @Input() enteId:any;
  si:boolean;
  constructor() {
  }

  ngOnInit() {
    this.tab = "uno" 
  }

  setTab(value){
    this.tab = value;
    this.si = true;
  }

  setTaboff(value){
    this.tab = value;
    this.si = false;
  }

}
