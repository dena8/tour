

export interface IUser<T>{
    _id:string
    username:string
    email:string
    password:string
    tours:T[]
    admin:boolean
}