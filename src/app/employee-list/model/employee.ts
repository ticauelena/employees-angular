export class Employee {
    name: String | null;
    gender: String | null;
    email: String | null;
    phone: String | null;
    hireDate: Date | null;
    workeedType: String | null;
    salary: number | null;
    isEmployee: Boolean | null;

    constructor (name: String, gender: String, email: String, phone: String, hireDate: Date,
         workeedType: String, salary: number, isEmployee: Boolean) {
              this.name = name || null;  
              this.gender = gender || null; 
              this.email = email || null;
              this.phone = phone || null; 
              this.hireDate = hireDate || null;
              this.workeedType = workeedType || null;
              this.salary = salary;
              this.isEmployee = isEmployee;
        }
}
      