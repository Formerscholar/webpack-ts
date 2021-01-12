

//-----------------------------------------------

// var str:string = "你好ts"
// console.log(str);


// function a(): number{
//   return 1
// }

// console.log(a());

// class Person {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }

//   run(): void{
//     console.log(this.name);

//   }
// }


// let A = new Person('战三')

// A.run()

// class Web extends Person {
//   constructor(n:string) {
//     super(n)
//   }

//   static pri() {
//     console.log('http://www.iyx668.com/thread-3553-1-1.html');

//   }

// }

// let B = new Web('李四')
// B.run()
// Web.pri()

// interface FullName {
//   FirstName: string
//   LastName?:string
// }

// function printName(name:FullName) {
//   console.log(name);
// }

// printName({
//   FirstName: '1',
// })

// interface encrypt {
//   (data: encryptData): string
// }

// interface encryptData {
//   key: string
//   val: string
// }

// let Md5: encrypt = (data: encryptData): string => {
//   return data.key + data.val
// }

// console.log(Md5({ key: 'name', val: '张三' }));



// interface arrType{
//   [index:number]:string
// }

// let arr: arrType = ['1230', '456']

// console.log(arr);



// interface Animal{
//   eat(): void;
// }

// interface Person extends Animal{
//   work(): void;
// }

// class Coder {
//   name: string
//   constructor(name: string) {
//     this.name =name
//   }
//   coding(code: string) {
//     console.log(this.name+'在写代码:'+code);

//   }
// } 

// class Web extends Coder implements Person{
//   constructor(name: string,) {
//     super(name)
//   }
//   eat() {
//     console.log(this.name+'吃馒头');
//   }
//   work() {
//     console.log(this.name+'工作');
//   }
// }
// let A = new Web('小王')

// A.eat()
// A.work()
// A.coding('CV')

// function getData<T>(value: T): T{
//   return value
// }


// console.log(getData<number>(123));

// getData<number>('123')


// class MinClas<T>{
//   public list: T[] = []
//   add(value: T): void {
//     this.list.push(value)
//   }
//   min(): T {
//     var minNum = this.list[0]
//     for (let i = 0; i < this.list.length; i++) {
//       if (minNum>this.list[i]) {
//         minNum = this.list[i]        
//       }
//     }
//     return minNum
//   }
// }

// let N = new MinClas<number>()

// N.add(4)
// N.add(15)
// N.add(546)
// N.add(8)
// N.add(54)

// console.log(N.min());

// let N1= new MinClas<string>()

// N1.add('c')
// N1.add('e')
// N1.add('f')
// N1.add('g')
// N1.add('e')

// console.log(N1.min());


// interface ConfigFn{
//   <T>(value:T):T
// }

// let getData: ConfigFn = function <T>(value: T): T{
//   return value
// }

// console.log(getData<string>('123'));

// interface ConfigFn<T>{
//   (value:T):T
// }

// let getData = function <T>(value: T): T{
//   return value
// }

// let myGetData:ConfigFn<string> = getData

// console.log(myGetData('465'));


// class User{
//   username: string |undefined
//   password: string | undefined
// }

// class MysqlDb{

//   add(user:User): boolean{
//     console.log(user);
//     return true
//   }
// }

// let u = new User()

// u.username = '战三'
// u.password="123456"

// let db = new MysqlDb()
// db.add(u)



// class Article{
//   title: string |undefined
//   desc: string | undefined
//   status:number | undefined
// }

// class MysqlDb{

//   add(article:Article): boolean{
//     console.log(article);
//     return true
//   }
// }

// let a = new Article()

// a.title = '战三'
// a.desc = "123456"
// a.status = 1

// let db = new MysqlDb()
// db.add(a)




// class MysqlDb<T>{
//   add(info: T): boolean {
//     console.log(info);
//     return true
//   }
//   updated(info: T, id: number): boolean {
//     console.log(info);
//     console.log(id);
//     return true
//   }
// }

// class Article {
//   title: string | undefined
//   desc: string | undefined
//   status: number | undefined
//   constructor(params: {
//     title: string | undefined,
//     desc: string | undefined,
//     status?: number | undefined
//   }) {
//     this.title = params.title
//     this.desc = params.desc
//     this.status = params.status
//   }
// }

// class User {
//   username: string | undefined
//   password: string | undefined
//   constructor(params: {
//     username: string | undefined,
//     password: string | undefined
//   }) {
//     this.username = params.username
//     this.password = params.password
//   }
// }

// let a = new Article({
//   title: '张三',
//   desc: '内容',
//   status: 0
// })

// let db = new MysqlDb<Article>()
// db.add(a)

// let u = new User({
//   username: 'chad',
//   password: '123456'
// })

// let db1 = new MysqlDb<User>()
// db1.add(u)

// db1.updated({
//   username: '465',
//   password: '789654'
// }, 5)


// namespace A {
//   export class Dog {
//     name: string
//     constructor(name: string) {
//       this.name = name
//     }
//     eat(foot: string) {
//       console.log(this.name + '吃' + foot);
//     }
//   }
// }

// let C = new A.Dog('小溪')
// C.eat('骨头')



// function logClass(cla:any) {

//   console.log(cla);
//   cla.prototype.url = 'xxxxx'
//   cla.prototype.init = function () {
//     console.log('初始化');
//   }
// }

// @logClass
// class HttpCli{

//   constructor() {

//   }

//   getData() {

//   }

// }

// let http: any = new HttpCli()
// http.init()
// console.log(http.url);

// interface logType {
//   username: string
//   password: string
// }


// function logClass(params: logType): any {

//   return (target: any) => {
//     console.log(params);
//     console.log(target);
//     return class extends target { // 重置 constructor
//       name: any = params.username
//       getData() {
//         console.log(this.name + '重载后');
//       }
//     }
//   }
// }

// function nameType(params: string) {
//   return (target: any, attr: any) => {
//     console.log(params);
//     console.log(target);
//     console.log(attr);
//     target[attr] = params
//   }
// }


// @logClass({
//   username: 'chad',
//   password: '132456'
// })
// class HttpCli {
//   @nameType('string')
//   public name: string

//   constructor() {
//     this.name = "构造函数name"
//   }

//   getData() {
//     console.log(this.name + '属性装饰器修改后');
//   }
// }

// let A = new HttpCli()
// A.getData()


//装饰器执行顺序 : 属性>方法>参数>类   从后向前

