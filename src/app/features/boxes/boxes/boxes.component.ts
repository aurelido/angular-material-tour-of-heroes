import { Component, OnInit } from '@angular/core';
import {Box, BOXES} from '../box.data'

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

  boxes:Box[] = BOXES;

  constructor() { }

  ngOnInit(): void {
  }

}
