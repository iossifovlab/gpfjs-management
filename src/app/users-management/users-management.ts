export class UserRow {
  public static fromJsonArray(json: any): UserRow[] {
    return json.map((user: any) => UserRow.fromJson(user));
  }

  public static fromJson(json: any): UserRow {
    return new UserRow(
      json['email'],
      json['groups'],
      json['datasets'],
    );
  }

  public constructor(
    public email: string,
    public groups: Array<string>,
    public datasets: Array<string>
  ) {}
}
