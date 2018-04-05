import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';

class SimpleService {
  constructor() {
    console.log('SimpleService is being created');
  }
  getValue(): string {
    return 'a value';
  }
}

class ParamService {
  constructor(private phrase: string) { // 带参数的构造函数
    console.log('ParamService is being created with phrase', phrase);
  }
  getValue(): string {
    return this.phrase;
  }
}

@Component({
  selector: 'app-root',
  template: `
  root
  `
})
export class AppComponent {
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
