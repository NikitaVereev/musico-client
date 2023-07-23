import { FC } from 'react';
import {useSearch} from "@/src/components/layout/header/search/search-list/useSearch";
import styles from './Search.module.scss'
import SearchField from "@/src/components/ui/search-field/SearchField";
import SearchList from "@/src/components/layout/header/search/search-list/SearchList";

const Search: FC = () => {
    const {isSuccess, data, handleSearch, searchTerm} = useSearch()
    return (
        <div className={styles.wrapper}>
            <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
            {isSuccess && <SearchList products={data || []} />}
        </div>
    );
}

export default Search;