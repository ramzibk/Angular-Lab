import { createReducer, on } from "@ngrx/store";
import { BooksActions, BooksApiActions } from "./books.actions";

export const initialState: Array<string> = []

export const bookCollectionReducer = createReducer(
    initialState,
    on(BooksActions.removeBook, (state, {bookId}) => 
    state.filter((id) => id !== bookId)
    ),

    on(BooksActions.addBook, (state, {bookId}) => {
        if (state.indexOf(bookId) > -1) 
          return state
        else 
          return [...state, bookId]
    })

)