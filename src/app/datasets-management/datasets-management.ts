export class DatasetRow {
  public static fromJson(json): DatasetRow {
    return new DatasetRow(
      json['dataset'],
      json['groups'],
      json['users'],
    );
  }
  public constructor(
    public readonly dataset: string,
    public readonly groups: string[],
    public readonly users: string[],
  ) {}
}