import {IBase} from './base';
import {IUser} from './user'
import {ITour} from './tour-create'


export interface IOrder extends IBase{
    buyDate:string;
    customer: IUser<ITour>
    buyingProducts: ITour[]
}