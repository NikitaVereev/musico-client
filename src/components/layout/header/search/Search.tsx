import {FC, useEffect} from 'react';
import { useSearch } from "@/src/components/layout/header/search/search-list/useSearch";
import styles from './Search.module.scss'
import SearchField from "@/src/components/ui/search-field/SearchField";
import SearchList from "@/src/components/layout/header/search/search-list/SearchList";
import {searchSlice} from "@/src/components/store/search/search.slice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

const Search: FC = () => {
  const { isSuccess, data, handleSearch, searchTerm, setSearchTerm } = useSearch();
  const dispatch = useDispatch()
  const router = useRouter();
  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(searchSlice.actions.setData(data));
      router.push('/search-page');
    }
  };




  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleKeyPress={handleKeyPress} handleSearch={handleSearch} />
      {isSuccess && <SearchList setSearchTerm={setSearchTerm} products={data || []} />}
    </div>
  );
};

export default Search;
