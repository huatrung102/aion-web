import {Component, Inject} from '@angular/core';
import {AppState} from './app.service';
import {Config, APP_CONFIG} from './app.config';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  loading = false;
  name = this.config.title;

  constructor(public appState:AppState, @Inject(APP_CONFIG) private config:Config) {

  }

  ngOnInit() {
    //console.log('Initial App State', this.appState.state);
  }


}
