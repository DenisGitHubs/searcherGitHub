import { useEffect, useState } from "react";
import * as S from "./filterBlock.styled";
export const FilterBlock = (props) => {
  const [upOrDown, setUpORDown] = useState("увеличению");
  const [choiceFollow, setChoiceFollow] = useState(false);
  const [choiceRepos, setChoiceRepos] = useState(false);
  const [choiceDate, setChoiceDate] = useState(false);
  useEffect(() => {
    if (props.sort === "followers") setChoiceFollow(true);
    if (props.sort === "repositories") setChoiceRepos(true);
    if (props.sort === "joined") setChoiceDate(true);
  }, []);
  useEffect(() => {
    if (props.order === "desc") setUpORDown("увеличению");
    if (props.order === "asc") setUpORDown("уменьшению");
  }, []);
  const doUpOrDown = () => {
    if (upOrDown === "увеличению") {
      props.setOrder("asc");
      return;
    }
    if (upOrDown === "уменьшению") {
      props.setOrder("desc");
      return;
    }
  };

  const choiceSort = (sort) => {
    props.setSort(sort);
  };

  return (
    <S.Filter>
      <S.UpOrDown onClick={() => doUpOrDown()}>По {upOrDown}</S.UpOrDown>
      <S.FiltersOption
        $bgColor={choiceFollow}
        onClick={() => choiceSort("followers")}
      >
        По подписчикам
      </S.FiltersOption>
      <S.FiltersOption
        $bgColor={choiceRepos}
        onClick={() => choiceSort("repositories")}
      >
        По репозитариям
      </S.FiltersOption>
      <S.FiltersOption
        $bgColor={choiceDate}
        onClick={() => choiceSort("joined")}
      >
        По дате создания
      </S.FiltersOption>
    </S.Filter>
  );
};
