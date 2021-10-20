import { createFeatureSelector, createSelector } from '@ngrx/store';
import{ ITour} from '../model/buy';

export const cart = {
      get:createSelector(createFeatureSelector('cart'),(state:ITour[])=>state),
      sum:createSelector(createFeatureSelector('cart'),(state:ITour[])=>{
          return  state.reduce((acc, { price }) => acc + price, 0);
      }),
      findById:(id:string)=>createSelector(createFeatureSelector('cart'),(state:ITour[])=>state.find(t=>t.id==id)),  
}