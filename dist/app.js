"use strict";
// class DataStorage<T> {
//     private extractData:T[]=[];
//     addItem(item:T){
//         this.extractData.push(item);
//     }
//     removeItem(item:T){
//         this.extractData.splice(this.extractData.indexOf(item),1)
//     }
//    get getData(){
//         return this.extractData;
//     }
// }
// const genData = new DataStorage<string>();
// genData.addItem('Arun');
// genData.addItem('Jeevan');
// genData.addItem('Phani');
// console.log(genData.getData)
// genData.removeItem('Phani')
// console.log(genData.getData)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    //default Constructor
    //  constructor(){
    //     this.name="Accounting";
    //  }
    function Department(iD, n) {
        this.employees = [];
        this.id = iD;
        this.name = n;
    }
    // abstract describe(this:Department){
    // }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = '28-10-2021';
    return Department;
}());
//  class ITDepartment extends Department{
//     admins:string[];
//     constructor (id:string, admin:string[]){
//        super(id,"IT");
//        this.admins=admin;
//     }
//     describe(){
//        console.log("Department is:" + this.name)
//     }
//  }
var AccountReport = /** @class */ (function (_super) {
    __extends(AccountReport, _super);
    function AccountReport(ID, reports) {
        var _this = _super.call(this, ID, '') || this;
        _this.reports = reports;
        _this.lastreport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountReport.prototype, "mostRecentReport", {
        get: function () {
            if (!this.lastreport) { //last report is private and cannot be accessed outside this class
                throw new Error("No report found"); // So we use get and set method which forms encapsulation
            }
            return this.lastreport; //get method should contain return keyword
        },
        set: function (value) {
            if (!value) {
                throw new Error("Do enter some value");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountReport.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastreport = text;
    };
    AccountReport.prototype.prinReport = function () {
        console.log(this.reports);
    };
    AccountReport.prototype.addEmployee = function (employee) {
        this.employees.push(employee); //overriding 
    };
    AccountReport.prototype.describe = function () {
        console.log("Department is:" + this.name);
    };
    return AccountReport;
}(Department));
// const accounting = new Department("AC","Accounting");
// console.log(accounting);
// // accounting.describe();
// accounting.addEmployee("Venkat");
// // accounting.addEmployee("Ramesh")
// // //accounting.employees=["Jeevan"];
// // accounting.printEmployeeInfo();
//  const ITD = new ITDepartment("ITD",["Jeevan"]);
//  ITD.name="NewName";
//  console.log(ITD);
// const accountCopy = {name:"Dummy",describe:accounting.describe};
// accountCopy.describe();
console.log('Financial Year Report :' + Department.fiscalYear);
var reporting = new AccountReport("d2", ['HealthSector']);
//reporting.name="HealthSector"
console.log(reporting);
reporting.addReport("Something went wrong....");
console.log(reporting.mostRecentReport);
reporting.mostRecentReport = 'Year end Report';
reporting.prinReport();
reporting.addEmployee("Jeevan"); // overriding
reporting.printEmployeeInfo();
reporting.name = 'Arun';
reporting.describe();
