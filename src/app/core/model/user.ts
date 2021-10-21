

export interface IUser<T>{
    id:string
    username:string
    email:string
    password:string
    createdTours:T[]
    cart:T[]
    tours:T[]
    admin:boolean
    token:string
    roles:string
}