import { Form, Layout, Row } from "antd";
import { FC } from "react";
import SearchForm from "./SearchForm";

interface ISearchPanel{
    title: string,
}

const SearchPanel: FC<ISearchPanel> = ({title}) => {
    return (  
        <Layout.Header className="search-panel">
            <Row justify='center'>
                <div className="search-title">{title}</div>
            </Row>
            <SearchForm/>
            
        </Layout.Header>
    );
}

export default SearchPanel;