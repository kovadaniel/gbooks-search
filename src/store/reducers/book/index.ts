import { BookAction, BookActionsEnum, BookState } from "./types";

const initialState: BookState = {
    books: [],
    total: 0,
    page: 0,
    isLoading: false,
    error: '',
}

export default function BookReducer(state = initialState, action: BookAction){
    switch(action.type){
        case BookActionsEnum.SET_BOOKS:
            return {...state, books: action.payload, isLoading: false};
        case BookActionsEnum.SET_TOTAL_BOOKS:
            return {...state, total: action.payload};
        case BookActionsEnum.SET_PAGE:
            return {...state, page: action.payload};
        case BookActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload};
        case BookActionsEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false};
        default:
            return state;
    }
}