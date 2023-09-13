import axios, { AxiosResponse } from "axios";
import { googleBooksApiResponse } from "../models/IBook";
import { paginationStep } from "../utils/constants";
import { CategoryEnum, ISearchParams } from "../models/ISearchParams";

const googleBooksKey = 'AIzaSyBSI5Weagg446f41PPM3xJJio9ww_VHsgI';

export default class BookService {
    static async getBooks(params: ISearchParams, page = 0, maxResults = paginationStep): Promise<AxiosResponse<googleBooksApiResponse>>{
        const query = 
            (params.query ? params.query : 'A') + 
            (params.category === CategoryEnum.all ? '' : `+subject:${params.category}`);
        const response = await axios.get<googleBooksApiResponse>('https://www.googleapis.com/books/v1/volumes', {
                params: {
                    q: query,
                    orderBy: params.sort,
                    key: googleBooksKey,
                    startIndex: page * maxResults,
                    maxResults
                }
            } 
        )
        return response;
    }
}