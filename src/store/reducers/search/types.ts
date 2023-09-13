import { CategoryEnum, ISearchParams, SortEnum } from "../../../models/ISearchParams";

export type SearchState = ISearchParams;

export enum SearchActionsEnum{
    SET_QUERY = "SET_QUERY",
    SET_CATEGORY = "SET_CATEGORY",
    SET_SORT = "SET_SORT",
}

export type Action<T, P> = {type: T, payload: P}

export type setQueryAction = Action<SearchActionsEnum.SET_QUERY, string>
export type setCategoryAction = Action<SearchActionsEnum.SET_CATEGORY, CategoryEnum>
export type setSortAction = Action<SearchActionsEnum.SET_SORT, SortEnum>

export type SearchAction = 
    setQueryAction |
    setCategoryAction |
    setSortAction;