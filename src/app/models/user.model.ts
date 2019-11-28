import {Resource} from "./resource.model";

export class User extends Resource<User> {
  firstName: string;
  lastName: string;
  mail: string;

  constructor() {
    super();
  }

  get name ():string {
    return this.firstName + ' ' + this.lastName;
  }

  public static Create (data: any): User {
    const user = new User();
    user.fromJson(data);
    return user;
  }

  public fromJson(data: any): void {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.mail = data.mail;
    this.key = data.key;
    return undefined;
  }

  public toDbFormat(): any {
    return {firstName: this.firstName, lastName: this.lastName, mail: this.mail}
  }
}
