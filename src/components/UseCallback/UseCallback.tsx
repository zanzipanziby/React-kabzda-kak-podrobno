import React, {useCallback, useMemo, useState} from "react";

type BooksSecretPropsType = {
    books: Array<string>
    addBook: () => void
}
export const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
            {props.books.map((book, i) => {
                return (
                        <div key={i}>{book}</div>
                )
            })}
        </div>
    )

}
export const Books = React.memo(BooksSecret)


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML", "GraphQL"])

    const newArray = useMemo(() => {
        return books.filter(book => book.toLowerCase().indexOf('a') > -1)
    }, [books])

    const addBook = () => setBooks([...books, 'Angular'])
    const memoizedAddBook = useMemo(()=> addBook,[books])//
    const memoizedAddBook2 = useCallback(addBook,[books]) // useCallback принимает функцию которую нужно запомнить

    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>

            {counter}
            <Books books={newArray} addBook = {memoizedAddBook}/>
        </div>
    )
}