import { ITourState } from '../model';

export const getAll = (state: ITourState) => state.tour;
 export const findById = (id:string) => (state:ITourState)=> state.tour.find(t=>t.id===id);
