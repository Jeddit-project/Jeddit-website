import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';


export class Rule {
  title: string;
  content: string;
}


@Injectable({
  providedIn: 'root'
})
export class SubjedditRulesService {

  constructor() { }

  getSubjedditRules(): Observable<Rule[]> {
    return of([
      {
        title: '1.Only Terraria related content',
        content: 'Keep it on-topic'
      },
      {
        title: '2.English language, follow the reddiquette & search',
        content: 'This is an English speaking community, follow the reddiquette and please search the subreddit before posting, ' +
        'to avoid regularly asked questions and topics.'
      },
      {
        title: '3.No bad behaviour',
        content: '\n' +
        '    Doxing (releasing personal information)\n' +
        '    Homophobia, sexism, racism or any other derogatory language\n' +
        '    Purposefully inciting arguments\n' +
        '    Personal attacks, harassment and threats\n' +
        '    No explicit content, anything which is deemed NSFW will be removed.\n' +
        '\n' +
        'Depending upon the severity of the offense a warning or instant ban may be given.\n'
      },
    ]);
  }
}
