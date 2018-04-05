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

class User {
  name: string;
  constructor() {
    this.name = 'zhangsan';
  }
  loggedIn(): boolean {
    return false;
  }
}
class MyComponent {
  constructor() {
    console.log('MyComponent');
  }
}
class MyLoggedComponent {
  constructor(private user) {
    console.log('MyLoggedComponent', user.name);
  }
}


@Component({
  selector: 'app-root',
  template: `
  <button (click)="invokeService()">Get Value</button>
  `
})
export class AppComponent {
  constructor(
    private simpleService: SimpleService,
    private paramService: ParamService,
    private myComponent: MyComponent
  ) { }
  invokeService(): void {
    console.log('SimpleService returned', this.simpleService.getValue());
    console.log('ParamService returned', this.paramService.getValue());
  }
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
    },
    // 使用工厂注入MyComponent，工厂也有自己的依赖User
    User,
    {
      provide: MyComponent,
      useFactory: (user) => {
        if (user.loggedIn()) {
          return new MyLoggedComponent(user);
        } else {
          return new MyComponent();
        }
      },
      deps: [User]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
