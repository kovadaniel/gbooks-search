import { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/useAppSelector";
import { Button, Layout, Pagination, Row, Spin, message } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import BookListItem from "../components/BookListItem";
import { CategoryEnum } from "../models/ISearchParams";
import { IBook } from "../models/IBook";


const Books:FC = () => {
    const {fetchBooks, setPage, setTotalBooks, setBooks} = useActions();
    const {books, isLoading, error, total, page} = useAppSelector(state => state.book)
    const searchParams = useAppSelector(state => state.search);

    const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        fetchBooks({
            params: searchParams,
            startIndex: page,
            callback: async (data) => {
                // add newly loaded books to our previously loaded books
                // but check wheather they are unique
                let newBooks: IBook[];
                if(data.items){
                    newBooks = data.items.filter(item => 
                        !books.map(book => book.id).includes(item.id)
                    )
                } else{
                    newBooks = []
                }
                setBooks([...books, ...newBooks])
                setTotalBooks(data.totalItems);
            }, 
        })
    }, [page])

    useEffect(() => {
        if(error){
            messageApi.open({
                type: 'error',
                content: 'Error:' + error,
            });
        }

    }, [error])

    const handleLoadMore = () => {
        setPage(page + 1);
    }

    return (  
        <Layout>
            <Layout.Header className="books-header" >
                <Row justify='center'>
                    Found {total} results
                </Row>
            </Layout.Header>
            <Layout.Content>
                <div className="book-list">
                     {books && books.map(book => 
                        <BookListItem 
                            key={book.id} 
                            id={book.id}
                            title={book.volumeInfo?.title}
                            authors={book.volumeInfo?.authors}
                            categories={book.volumeInfo?.categories as CategoryEnum[]}
                            image={book.volumeInfo?.imageLinks?.thumbnail}
                        />    
                    )}             
                </div>

                <Row justify='center' className="book-spinner">
                    <div>{error}</div>
                    {contextHolder}
                    <Spin indicator={antIcon} spinning={isLoading}/>
                </Row>
            </Layout.Content>
            <Layout.Footer>
                <Row justify='center'>
                    <Button 
                        type="primary" 
                        loading={isLoading} 
                        onClick={handleLoadMore}
                    >
                        Load more
                    </Button>
                </Row>
                {/*<Pagination 
                    defaultCurrent={page} 
                    total={total} 
                    onChange={setPage}
                    showSizeChanger={false}
                    defaultPageSize={paginationStep}/>*/}
            </Layout.Footer>
                        
        </Layout>
        
    );
}
 
export default Books;