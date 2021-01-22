

export interface IUser<T>{
    _id:string
    username:string
    email:string
    password:string
    createdTours:T[]
    cart:T[]
    tours:T[]
    admin:boolean
}