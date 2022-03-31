import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  vote: number;
  title: string;
  link: string;
  constructor() {
    this.vote = 13;
    this.title = 'Angular';
    this.link = 'http://angular.io';
  }

  /**
   * voteUp
   * TODO : incrémente le vote sur l'article de 1
   * @returns false : evite le chargement de la page après vote
   */
  voteUp(): boolean {
    this.vote += 1;
    return false;
  }

  /**
   * voteUp
   * TODO : décrémente le vote sur l'article de 1
   * @returns false : evite le chargement de la page après vote
   */
  voteDown(): Boolean {
    this.vote -= 1;
    return false;
  }

  ngOnInit(): void {}
}
