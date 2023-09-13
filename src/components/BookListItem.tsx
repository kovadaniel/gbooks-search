import { Card, Image } from 'antd';
import Meta from 'antd/es/card/Meta';
import {FC} from 'react'
import { CategoryEnum } from '../models/ISearchParams';
import { toCombedString } from '../utils';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { noImage } from '../utils/constants';

export interface IBookListItem{
    title: string,
    authors: string[],
    categories: CategoryEnum[],
    image: string,
    id: string,
}


const BookListItem: FC<IBookListItem> = ({title, authors, categories, image, id}) => {
    const navigate = useNavigate();
    
    return (  
        <Card
            hoverable
            className='book-list-item'
            cover={
                <Image
                    height={200}
                    alt={title} 
                    src={image} 
                    preview={false}
                    fallback={noImage}
                />}
            onClick={() => 
                navigate(RouteNames.BOOKS + '/'+id)}
        >
            <div className='book-category'>
                {categories && categories.length && categories[0]}
            </div>
            <Meta 
                title={title}
                description={authors && <span>{toCombedString(authors)}</span>} 
            />
      </Card>
    );
}
 
export default BookListItem;