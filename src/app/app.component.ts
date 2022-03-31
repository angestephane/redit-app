import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'redit-app';

  /**
   * addLink
   * TODO :
   *
   * ?méthode publique
   *
   * @param title object de type HTMLInputElement
   * @param link  object de type HTMLInputElement
   * @returns false pour eviter que la page se recharge après click
   */
  addLink(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`titre : ${title.value} lien : ${link.value}`);
    return false;
  }
}
