export class User {
    userName: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    interests: string;
    constructor(userName: string, firstName: string,
        lastName: string, phoneNumber: number, interests: string) {
            this.userName = userName;
            this.firstName = firstName;
            this.lastName =  lastName;
            this.phoneNumber = phoneNumber;
            this.interests = interests;
        }
  }
  