import { ICurrent } from "./current";
import{ILocation} from "./location";

export interface IForecast{
     current: ICurrent;
     location: ILocation;
     success:boolean;
}