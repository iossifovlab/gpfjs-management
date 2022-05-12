export class UserRow {
  // public static fromJsonArray(json): UserRow[] {
  //   return json.map(user => UserRow.fromJson(user));
  // }

  public static fromJson(json): UserRow {
    return new UserRow(
      json['email'],
      json['groups'],
      json['datasets'],
    );
  }

  public constructor(
    public email: string,
    public groups: Array<string>,
    public allowedDatasets: Array<string>
  ) {}
}
