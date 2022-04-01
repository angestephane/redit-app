import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'redit-app';

  articles: Array<Article>;
  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 10),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  /**
   * addLink
   * TODO : recupère les données saisis dans le formulaire
   *
   * ?méthode publique
   *
   * @param title object de type HTMLInputElement
   * @param link  object de type HTMLInputElement
   * @returns false pour eviter que la page se recharge après click
   */
  addLink(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`titre : ${title.value} lien : ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  /**
   * TODO : Ajout d'un systeme de trie selon le score
   * ! lien pour les tries : https://mzl.la/3ITo01i
   * ! lien pour les fonctions flechées
   * @returns : un tableau d'article trié
   */
  sortArticle(): Array<Article> {
    return this.articles.sort((a: Article, b: Article) => b.vote - a.vote);
  }
}
