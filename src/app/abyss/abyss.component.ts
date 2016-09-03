import {Component, OnInit}  from '@angular/core';
import {JSONP_PROVIDERS}  from '@angular/http';
import {Observable}       from 'rxjs/Observable';
import {BaseService} from './../services/base.service';
import {Rank, Ranks} from './ranks';

@Component({
  selector: 'my-app',
  template: require('./abyss.html'),
  providers: [JSONP_PROVIDERS, BaseService]
})

export class AbyssComponent implements OnInit {
  items:Observable<string[]>;

  constructor(private _baseService:BaseService) {
  }

  getRankById = function (id) {
    var data = Ranks;

    function getName(code) {
      return data.filter(
        function (data) {
          return data.id == code
        }
      );
    }

    var found = getName(id);
    return found[0].name;
  }

  ngOnInit() {
    this.items = this._baseService.search('abyss');
  }
}
