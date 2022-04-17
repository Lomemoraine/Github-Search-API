export class Github {
  constructor(
    public name: string,
    public public_repos: number,
    public following: number,
    public followers: number,
    public avatar_url: string,
    public location: string,
    public gists: number,
    public created_at: Date
  ) {}
}
