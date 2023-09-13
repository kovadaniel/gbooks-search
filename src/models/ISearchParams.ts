export interface ISearchParams{
    query: string,
    category: CategoryEnum,
    sort: SortEnum,
}

export enum CategoryEnum {
    all = 'all',
    art = 'art',
    biography = 'biography',
    computers = 'computers',
    history = 'history',
    medical = 'medical',
    poetry = 'poetry',
}

export enum SortEnum{
    relevance  = 'relevance',
    newest = 'newest',
}