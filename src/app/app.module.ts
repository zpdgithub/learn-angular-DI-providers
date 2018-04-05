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
  constructor(
    private simpleService: SimpleService,
    private paramService: ParamService,
  ) { }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // 使用类
    SimpleService,
    // 使用工厂
    {
      provide: ParamService,
      useFactory: (): ParamService => new ParamService('YOLO')
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
