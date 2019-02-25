import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  public word: string = '';
  public isClicked: boolean = false;
  public members: {id: number; name: string}[] = [
    {id: 1, name: 'tomasu ishii'},
    {id: 2, name: 'Taro Yamada'},
    {id: 3, name: 'Jiro Tanaka'},
    {id: 4, name: 'Hanako Sato'},
    {id: 5, name: 'Naoko Kato'},
  ];

  public fruits: string[] = [
    'apple', 'orange', 'grape', 'strawberry', 'lemon'
  ];

  public selectedFruit: string = '';


  public click(): void {
    this.isClicked = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
