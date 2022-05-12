export class GroupRow {
  // public static fromJsonArray(jsonArray: any[]): GroupRow[] {
  //   return jsonArray.map(v => GroupRow.fromJson(v));
  // }

  public static fromJson(json): GroupRow {
    return new GroupRow(
      json['name'],
      json['users'],
      json['datasets'],
    );
  }

  public constructor(
    public name: string,
    public users: string[],
    public datasets: string[]
  ) {}
}
