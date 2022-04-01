export class Article {
  vote: number;
  title: string;
  link: string;
  constructor(title: string, link: string, vote?: number) {
    this.title = title;
    this.link = link;
    this.vote = vote || 0;
  }

  /**
   * voteUp
   * TODO : incrémente le vote sur l'article de 1
   * @returns false : evite le chargement de la page après vote
   */
  voteDown(): Boolean {
    this.vote -= 1;
    return false;
  }

  /**
   * voteUp
   * TODO : décrémente le vote sur l'article de 1
   * @returns false : evite le chargement de la page après le vote
   */
  voteUp(): boolean {
    this.vote += 1;
    return false;
  }
  /**
   * TODO => Soit une url donnée "http://foo.com/path/to/bar"
   * TODO => on souhaite recuperer foo.com qui est le nom de domaine
   *
   *
   * @returns un string qui est le nom du domaine d'une url founie
   */
  domaine(): string {
    /**
     * TODO => divivise l'url donnée en deux partie
     * TODO => [0]-> avant les //
     * TODO => [1]-> après les //
     * @returns foo.com/path/to/bar pour http://foo.com/path/to/bar donnée
     */
    const domainePath = this.link.split('//')[1];
    /**
     * TODO => divivise l'url donnée en deux partie
     * TODO => [0]-> avant les /
     * TODO => [1]-> après les /
     * @returns foo.com pour foo.com/path/to/bar donnée
     */
    return domainePath.split('/')[0];
  }
}
