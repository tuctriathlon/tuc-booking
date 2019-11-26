export class User {
  id: string;
  firstName: string;
  lastName: string;
  mail: string;

  get name ():string {
    return this.firstName + ' ' + this.lastName;
  }

  public static Create (firstName: string, lastName: string, mail:string): User {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.mail = mail;
    user.id = Math.floor(Math.random()*10000).toString(10);
    return user;
  }
}
