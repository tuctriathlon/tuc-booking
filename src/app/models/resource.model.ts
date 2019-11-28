export abstract class Resource<T> {
  public key: string;

  public abstract fromJson(data: any): void
  public abstract toDbFormat(): any;
}
