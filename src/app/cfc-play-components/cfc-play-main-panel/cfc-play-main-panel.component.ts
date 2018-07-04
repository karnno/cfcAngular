import { Component, OnInit, Input } from '@angular/core';
import { DropEvent}                 from 'ng-drag-drop';
import { LeftPlayer }               from './cfc-left-player';
import { RightPlayer }               from './cfc-right-player';
import { CfcCardType }              from './cfc-card-type';


@Component({
  selector: 'app-cfc-play-main-panel',
  templateUrl: './cfc-play-main-panel.component.html',
  styleUrls: ['./cfc-play-main-panel.component.css']
})
export class CfcPlayMainPanelComponent implements OnInit {

  // we draw cards from deck 3 by 3; 
  indexForCardsDrawing =0;

  // displayed cards go to this list
  listCard1 = [];

  // cards to use in defense go to this list
  listCardDefense1 = [];

  // listCardDefense2 = [];

  private cfcLeftPlayer : LeftPlayer;
  private cfcRightPlayer: RightPlayer;
  // input info for user name
  @Input() userData : any ;

  private userName : string;
  
  
  constructor() { }

  ngOnInit() {
    console.log(` init play main panel with user : ${this.userData.userLoggedName}`);
    this.userName = this.userData.userLoggedName;

    this.cfcLeftPlayer = new LeftPlayer(this.userName);
    this.cfcRightPlayer = new RightPlayer('Evil-Opponent');
  }

  getUserName(): string {
    return this.userName;
  }

  onDrop1(e: DropEvent) {
    if (this.listCardDefense1.length<2){
      this.listCardDefense1.push(e.dragData);
      this.removeItem(e.dragData, this.listCard1)
      this.removeItem(e.dragData, this.cfcLeftPlayer.getDeck());
    }
  }

  // onDrop2(e: DropEvent) {
  //   if (this.listCardDefense2.length ==0){
  //     this.listCardDefense2.push(e.dragData);
  //     this.removeItem(e.dragData, this.listCard1)
  //   }
  // }

  isDropAllowedDefenseOrHealCard = (dragData) => {
    return dragData.type == CfcCardType.DEFENSE  || dragData.type == CfcCardType.HEAL;
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (val) {
      return val;
    }).indexOf(item);
    console.log(`index of ${item} is ${index}`);  
    list.splice(index, 1);
  }

  // when clicking on the deck, display 3 cards 
  drawThreeCardsFromDeck() : void {
    // clear the previously displayed card
    this.clearArray(this.listCard1);


     
    this.indexForCardsDrawing = this.indexForCardsDrawing % this.cfcLeftPlayer.getDeck().length;
    console.log('starts at ' + this.indexForCardsDrawing);
    var step : number = 1 ;

    for ( ; this.indexForCardsDrawing < this.cfcLeftPlayer.getDeck().length && step <=3 ; step ++ ) {
      this.listCard1.push(this.cfcLeftPlayer.getDeck()[this.indexForCardsDrawing]) ;
      this.indexForCardsDrawing = this.indexForCardsDrawing +1 ;
    }
    console.log(' index ' + this.indexForCardsDrawing);

  }

  private clearArray<T>(array: T[]) {
    while (array.length) {
      array.pop();
    }
  }

  isDropAllowedOffenseCard = (dragData) => {
    return dragData.type == CfcCardType.OFFENSE;
  }

  onDropOffense(e: DropEvent) {
    //alert('___ '+e.dragData.name + '[' + e.dragData.energy + '|' + e.dragData.motivation + '|' + e.dragData.credibility + ']');
    this.cfcRightPlayer.modifyVitals(e.dragData.energy , e.dragData.motivation , e.dragData.credibility);
    this.removeItem(e.dragData, this.listCard1);
    this.removeItem(e.dragData, this.cfcLeftPlayer.getDeck());
  }

}
