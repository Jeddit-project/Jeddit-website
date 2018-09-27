import { Component, OnInit } from '@angular/core';
import {Rule, SubjedditRulesService} from '../../../../services/subjeddit-rules.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  rules: Observable<Rule[]>;

  constructor(private subjedditRulesService: SubjedditRulesService) { }

  ngOnInit() {
    this.rules = this.subjedditRulesService.getSubjedditRules();
  }

}
