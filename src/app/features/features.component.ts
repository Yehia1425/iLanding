import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  count1:number = 0 ;
  count2:number = 0 ;
  count3:number = 0 ;
  count4:number = 0 ;

  countStop:any = setInterval(()=>{
    this.count1++;

    if (this.count1 ==232) {
      clearInterval(this.countStop);
    }
  },10)
  countStop2:any = setInterval(()=>{
    this.count2++;

    if (this.count2 ==521) {
      clearInterval(this.countStop2);
    }
  },10)
  countStop3:any = setInterval(()=>{
    this.count3++;

    if (this.count3 ==1453) {
      clearInterval(this.countStop3);
    }
  },10)
  countStop4:any = setInterval(()=>{
    this.count4++;

    if (this.count4 ==32) {
      clearInterval(this.countStop4);
    }
  },10)
}
