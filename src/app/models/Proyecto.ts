export class Proyecto {

  public _id: string;
  public name: string;
  public category: string;
  public subtitle: string;
  public description: string;
  public subtitle2: string;
  public description2: string;
  public summary: string;
  public url_demo: string;
  public url_git: string;
  public url_imgPrincipal: string;
  public url_imgPrimera: string;
  public url_imgSegunda: string;

  constructor(
    _id: string,
    name: string,
    category: string,
    subtitle: string,
    description: string,
    subtitle2: string,
    description2: string,
    summary: string,
    url_imgPrincipal: string,
    url_imgPrimera: string,
    url_imgSegunda: string,
    url_demo: string,
    url_git: string,
  ) {
    this._id = _id;
    this.name = name;
    this.category = category;
    this.subtitle = subtitle;
    this.description = description;
    this.subtitle2 = subtitle2;
    this.description2 = description2;
    this.summary = summary;
    this.url_demo = url_demo;
    this.url_git = url_git;
  }
}
