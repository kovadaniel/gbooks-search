import { IBook } from "../../../models/IBook";

export interface BookState{
    books: IBook[];
    total: number;
    page: number;
    isLoading: boolean;
    error: string;
}

export enum BookActionsEnum{
    SET_BOOKS = "SET_BOOKS",
    SET_TOTAL_BOOKS = "SET_TOTAL_BOOKS",
    SET_PAGE = "SET_PAGE",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
}

export type Action<T, P> = {type: T, payload: P}

export type setBooksAction = Action<BookActionsEnum.SET_BOOKS, IBook[]>
export type setTotalBooksAction = Action<BookActionsEnum.SET_TOTAL_BOOKS, number>
export type setPageAction = Action<BookActionsEnum.SET_PAGE, number>
export type setIsLoadingAction = Action<BookActionsEnum.SET_IS_LOADING, boolean>
export type setErrorAction = Action<BookActionsEnum.SET_ERROR, string>

export type BookAction = 
    setBooksAction |
    setTotalBooksAction |
    setPageAction |
    setIsLoadingAction |
    setErrorAction;