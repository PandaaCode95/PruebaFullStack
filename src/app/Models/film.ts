
export class Film {
  public id?: number; 
  public release_date?: string;
  public title?: string;
  public poster?: string;
  public overview: string;
  public vote?: number;
  public name?: string;
  public original_language?:string;

  constructor(
    id: number,  
    title: string,
    overview: string,
    release_date: string,
    vote_average: number,
    original_language:string,
    poster_path?: string,
    name?: string
  ) {
    this.id = id;  
    this.title = title;
    this.overview = overview;
    this.release_date = release_date;
    this.vote = vote_average;
    this.poster = poster_path;
    this.name = name;
    this.original_language=original_language;
  }
}