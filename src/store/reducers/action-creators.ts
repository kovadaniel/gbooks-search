import { BookActionCreators } from "./book/action-creators";
import { SearchActionCreators } from "./search/action-creators";

export const allActionCreators = {
    ...BookActionCreators,
    ...SearchActionCreators,
}