export class Repos {
  constructor(
    public name: string,
    public html_url: string,
    public description: string,
    public languageUsed: string,
    public watching: number,
    public forks: number,
    public creationDate: Date,
    public pushed_at: Date,
    public clone_url:string,
  ) {}
}
