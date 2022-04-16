export class Github {
  constructor(
    public name: string,
    public repos: number,
    public following: number,
    public followers: number,
    public avatar_url: string,
    public location: string,
    public gists: number,
    public joinDate: Date
  ) {}
}
