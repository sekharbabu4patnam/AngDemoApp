import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ngclassdircomp',
  imports: [NgClass, NgStyle],
  templateUrl: './ngclassdircomp.html',
  styleUrl: './ngclassdircomp.css',
})
export class Ngclassdircomp {
  isSuccess: boolean = true;
  isError: boolean = false;
  isWarning: boolean = false;

  pageHits = signal(25);
  //computedPageHits = this.pageHits.asReadonly();
  computedPageHits = computed(() => this.pageHits() * 2);
  /*updatePageHits() {
    this.pageHits.set(this.pageHits() + 1);
  }*/


  effect() {
    console.log('Effect triggered. Page Hits:', this.pageHits());
  }

  success(){
   // this.updatePageHits();
   this.pageHits.update((value) => value + 1);
    console.log('Page Hits:', this.pageHits());
    console.log('Computed Page Hits:', this.computedPageHits());
    this.isSuccess = true;
    this.isError = false;
    this.isWarning = false;
  }

  err(){
   // this.updatePageHits();
   this.pageHits.update((value) => value + 1);
    console.log('Page Hits:', this.pageHits());
    this.isError = true;
    this.isWarning = false;
    this.isSuccess = false;
  }

  warning(){
    // this.updatePageHits();
    this.pageHits.update((value) => value + 1);
    console.log('Page Hits:', this.pageHits());
    this.isWarning = true;
    this.isError = false;
    this.isSuccess = false;
  }
  

}
