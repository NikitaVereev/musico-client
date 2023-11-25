import { NextPage } from "next";
import SearchPageInfo from "@/src/components/screens/search/Search";
import {useTypedSelector} from "@/src/hooks/useTypedSelector";


const SearchPage: NextPage = () => {
  const state = useTypedSelector((state) => state.search.search);
    return (
      <div >
          {<SearchPageInfo products={state || []} />}
      </div>
    );
};

export default SearchPage;
