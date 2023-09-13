import { CategoryEnum, SortEnum } from "../../../models/ISearchParams";
import { SearchAction, SearchActionsEnum, SearchState } from "./types";


const initialState: SearchState = {
    query: '',
    category: CategoryEnum.all,
    sort: SortEnum.relevance,
}

export default function SearchReducer(state = initialState, action: SearchAction){
    switch(action.type){
        case SearchActionsEnum.SET_QUERY:
            return {...state, query: action.payload};
        case SearchActionsEnum.SET_CATEGORY:
            return {...state, category: action.payload};
        case SearchActionsEnum.SET_SORT:
            return {...state, sort: action.payload};
        default:
            return state;
    }
}