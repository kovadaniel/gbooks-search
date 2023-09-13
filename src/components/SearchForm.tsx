import { Form, Input, Row, Select } from "antd";
import { FC, useEffect } from 'react'
import { CategoryEnum, ISearchParams, SortEnum } from "../models/ISearchParams";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";

const SearchForm: FC = () => {
    const {fetchBooks, setQuery, setCategory, setSort, setBooks, setTotalBooks} = useActions();
    const searchParams = useAppSelector(state => state.search);
    const {isLoading, books} = useAppSelector(state => state.book);
    const navigate = useNavigate();

    const onCategoryChange = (category: CategoryEnum) => {
        setCategory(category);
        fetchBooks({
            params: {...searchParams, category},
            callback: async (data) => {
                setBooks(data.items);
                setTotalBooks(data.totalItems);
            }, 
        })
    }

    const onSortChange = (sort: SortEnum) => {
        setSort(sort);
        fetchBooks({
            params: {...searchParams, sort},
            callback: async (data) => {
                setBooks(data.items);
                setTotalBooks(data.totalItems);
            }, 
        })
    }

    const onSubmit = () => {
        fetchBooks({
            params: searchParams,
            callback: async (data) => {
                setBooks(data.items);
                setTotalBooks(data.totalItems);
            }, 
        })
    }

    useEffect(() => {
        navigate(RouteNames.BOOKS);
    }, [books])

    return (  
        <Form
            onFinish={onSubmit}
            initialValues={{
                ["category"]: CategoryEnum.all,
                ["sort"]: SortEnum.relevance,
            }}
        >
            <Form.Item
                name="search">
                <Input.Search
                    value={searchParams.query}
                    allowClear
                    enterButton
                    onChange={e => setQuery(e.target.value)}
                    onSearch={onSubmit}
                    loading={isLoading}
                    className="search-input"
                />
            </Form.Item>

            <Row justify='space-evenly'>
                <Form.Item
                    name="category" 
                    label="Categories" 
                >
                    <Select
                        className="search-select"
                        onChange={onCategoryChange}
                        options={Object.keys(CategoryEnum).map(cat => ({value: cat, label: cat}))}
                    />
                </Form.Item>
                
                <Form.Item
                    name="sort" 
                    label="Sorting by"
                >
                    <Select
                        className="search-select"
                        onChange={onSortChange}
                        options={Object.keys(SortEnum).map(srt => ({value: srt, label: srt}))}
                    />
                </Form.Item>
            </Row>
        </Form>
    );
}
 
export default SearchForm;