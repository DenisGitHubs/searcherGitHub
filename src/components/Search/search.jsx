import { useEffect, useState } from "react";
import * as S from "./search.styled";
import { getUsersFromGitHub } from "../../API/getUsers";
import { PageList } from "../PageList/pageList";
import { ResultBlock } from "../ResultBlock/resultBlock";
import { FilterBlock } from "../FilterBlock/filterBlock";
import { Loader } from "../Loader/Loader";
export const SearchBlock = () => {
  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isCompleteSearch, setIsCompleteSearch] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [numberPage, setNumberPage] = useState(1);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState("desc");
  const [sort, setSort] = useState("followers");
  useEffect(() => {
    setError(null);
    handleClickStartSearch(
      searchName,
      setSearchResult,
      numberPage,
      setIsCompleteSearch,
      setError,
      order,
      sort
    );
  }, [numberPage, order, sort]);
  const handleClickStartSearch = async () => {
    if (searchName.length === 0) {
      return;
    }
    if (!navigator.onLine) {
      setError("Проверьте соединение");
      return;
    }
    setError(null);
    setIsLoader(true);
    setIsCompleteSearch(false);
    setSearchResult([]);
    await getUsersFromGitHub(
      searchName,
      setSearchResult,
      numberPage,
      setIsCompleteSearch,
      setError,
      order,
      sort
    );
    if (searchName.length !== 0) {
      setIsLoader(false);
    }
  };
  return (
    <S.Container>
      <S.Title>Сервис по поиску пользователей GitHub</S.Title>
      {error ? <S.Error>{error}</S.Error> : null}
      <S.SearchBlock>
        <S.SearchIcon src="search.png" alt="search icon"></S.SearchIcon>
        <S.Input
          placeholder="Введите имя пользователя GitHub"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <S.ButtonSearch onClick={() => handleClickStartSearch()}>
          Поиск
        </S.ButtonSearch>
      </S.SearchBlock>
      {isLoader ? <Loader /> : null}
      {isCompleteSearch ? (
        <FilterBlock
          setOrder={setOrder}
          setSort={setSort}
          sort={sort}
          order={order}
        />
      ) : null}
      {isCompleteSearch ? (
        <PageList numberPage={numberPage} setNumberPage={setNumberPage} />
      ) : null}
      {isCompleteSearch ? (
        <ResultBlock
          searchResult={searchResult}
          numberPage={numberPage}
          setError={setError}
        />
      ) : null}
    </S.Container>
  );
};
