export class Employee {
    id: number | null;
    employeeName: String | null;
    gender: String | null;
    email: String | null;
    phone: String | null;
    hireDate: Date | null;
    workedType: String | null;
    salary: number | null;

    constructor (id?:number, employeeName?: String, gender?: String, email?: String, phone?: String, 
        hireDate?: Date, workedType?: String, salary?: number) {
            this.id = id || null;
            this.employeeName = employeeName || null;  
            this.gender = gender || null; 
            this.email = email || null;
            this.phone = phone || null; 
            this.hireDate = hireDate || null;
            this.workedType = workedType || null;
            this.salary = salary || null;
        }
}
      