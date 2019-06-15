import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prospectoproducto',
  templateUrl: './prospectoproducto.component.html',
  styleUrls: ['./prospectoproducto.component.scss'],
})
export class ProspectoproductoComponent implements OnInit {


  ramo=[
	{'name':'Peru'},{'name':'Chile'}
	]

tipo=[
	{'name':'Peru'},{'name':'Chile'}
	]

  constructor() { }

  ngOnInit() {}

}
