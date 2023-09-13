import { AppDispatch } from "../..";
import BookService from "../../../api/BookService";
import { IBook, googleBooksApiResponse } from "../../../models/IBook";
import { ISearchParams } from "../../../models/ISearchParams";
import { paginationStep } from "../../../utils/constants";
import { BookActionsEnum, setBooksAction, setErrorAction, setIsLoadingAction, setPageAction, setTotalBooksAction } from "./types";

interface fetchBooksProps{
    params: ISearchParams, 
    callback?: (response: googleBooksApiResponse) => void,
    startIndex?: number, 
    maxResults?: number,
}

export const BookActionCreators = {
    setIsLoading: (isLoading: boolean): setIsLoadingAction => ({
        type: BookActionsEnum.SET_IS_LOADING, 
        payload: isLoading,
    }),
    setError: (error: string): setErrorAction => ({
        type: BookActionsEnum.SET_ERROR, 
        payload: error,
    }),
    setBooks: (books: IBook[]): setBooksAction => ({
        type: BookActionsEnum.SET_BOOKS,
        payload: books,
    }),
    setTotalBooks: (total: number): setTotalBooksAction => ({
        type: BookActionsEnum.SET_TOTAL_BOOKS,
        payload: total,
    }),

    setPage: (page: number): setPageAction => ({
        type: BookActionsEnum.SET_PAGE,
        payload: page,
    }),

    fetchBooks: (
    {
        params, 
        callback = async (response: googleBooksApiResponse) => {},
        startIndex = 0, 
        maxResults = paginationStep,
    } : fetchBooksProps) => 
        async (dispatch: AppDispatch) => {
            try{
                dispatch(BookActionCreators.setIsLoading(true));

                const response = await BookService.getBooks(params, startIndex, maxResults);
                //dispatch(BookActionCreators.setBooks(response.data.items))
                //dispatch(BookActionCreators.setTotalBooks(response.data.totalItems))
                callback(response.data)
                dispatch(BookActionCreators.setIsLoading(false));
            } catch (e){
                dispatch(BookActionCreators.setError('Error when loading the books: ' + e))
            }
    }
}