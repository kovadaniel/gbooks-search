import { Card, Col, Image, Row } from "antd";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { IBook } from "../models/IBook";
import { RouteNames } from "../router";
import Meta from "antd/es/card/Meta";
import { toCombedString } from "../utils";
import { noImage } from "../utils/constants";

type SingleBookParams = {
    id: string
}

const SingleBook:FC = () => {
    const {id} = useParams<SingleBookParams>();
    const {books} = useAppSelector(state => state.book);
    const navigate = useNavigate();
    const [book, setBook] = useState<IBook>();
    useEffect(() => {
        // if this SingleBook page was reloaded we have lost our 'books' state in Redux
        // so, for clearity, we have to return to the '/books' page 
        if(!books || !books.length){
            navigate(RouteNames.BOOKS)
        }
        setBook(books.find(book => book.id === id));
    } , [books, id])

    return (  
        <Row className="single-book-main">
            <Col span={24} md={11} className="single-book-image-container">
            {book && <Image
                height={450}
                className="single-book-image"
                src={book.volumeInfo.imageLinks.thumbnail}
                fallback={noImage}
            />}
            </Col>
            <Col span={24} md={13}>
                <Card className="single-book-description">
                    <div className='single-book-category'>
                        {book?.volumeInfo.categories && 
                            toCombedString(book?.volumeInfo.categories)}
                    </div>
                    <Meta 
                        title={book?.volumeInfo.title} 
                        description={book?.volumeInfo.authors && 
                            <span className="single-book-authors">{toCombedString(book?.volumeInfo.authors)}</span>}
                    />
                    {book?.volumeInfo.description && 
                        <Card className="single-book-description-card">
                            {book?.volumeInfo.description}
                        </Card>
                    }
                </Card>
 
            </Col>
        </Row>
    );
}
 
export default SingleBook;