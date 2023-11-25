import { ChangeEvent, FC } from 'react';
import { MaterialIcon } from '../MaterialIcon';
import styles from './SearchField.module.scss';
import { useRouter } from 'next/router';

interface ISearchField {
  searchTerm: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: any;
}

const SearchField: FC<ISearchField> = ({ searchTerm,handleKeyPress, handleSearch }) => {

  return (
    <div className={styles.search}>
      <MaterialIcon name="MdSearch" />
      <input
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchField;
