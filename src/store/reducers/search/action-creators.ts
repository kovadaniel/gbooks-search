import { CategoryEnum, SortEnum } from "../../../models/ISearchParams";
import { SearchActionsEnum, setCategoryAction, setQueryAction, setSortAction } from "./types";

export const SearchActionCreators = {
    setQuery: (query: string): setQueryAction => ({
        type: SearchActionsEnum.SET_QUERY,
        payload: query,
    }),
    setCategory: (category: CategoryEnum): setCategoryAction => ({
        type: SearchActionsEnum.SET_CATEGORY,
        payload: category,
    }),
    setSort: (sort: SortEnum): setSortAction => ({
        type: SearchActionsEnum.SET_SORT,
        payload: sort,
    }),
}