import { createFeatureSelector, createSelector } from '@ngrx/store';
import{ ITour} from '../model/buy';

export const cart = {
      get:createSelector( createFeatureSelector('buyReducer'),(state:ITour[])=>state),
      sum:createSelector(createFeatureSelector('buyReducer'),(state:ITour[])=>{
          return  state.reduce((acc, { price }) => acc + price, 0);
      })
}