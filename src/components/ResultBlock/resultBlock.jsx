import { useState } from "react";
import * as S from "./resultBlock.styled";
import { getFollowers } from "../../API/getUsers";
export const ResultBlock = (props) => {
  const allUsers = props.searchResult;

  const TextAboutUser = (props) => {
    const [visible, setVisible] = useState("none");
    const [followers, setFollowers] = useState(0);
    const [dateOfCreated, setDateOfCreated] = useState("");
    const [repos, setRepos] = useState(0);
    const linkFollowers = props.item.url;
    const showDetails = async () => {
      if (!navigator.onLine) {
        props.setError("Проверьте соединение");
        return;
      }
      props.setError(null);
      await getFollowers(
        linkFollowers,
        setFollowers,
        setDateOfCreated,
        props.setError,
        setVisible,
        setRepos
      );
    };

    return (
      <>
        <S.TextCard onClick={() => showDetails()} $hidden="block">
          Подробнее
        </S.TextCard>
        <S.LinkUser to={props.item.html_url} $hidden={visible}>
          страничка пользователя
        </S.LinkUser>
        <S.TextCard $hidden={visible}>
          подписчики: {followers}
        </S.TextCard>
        <S.TextCard $hidden={visible}>
          репозитарии: {repos}
        </S.TextCard>
        <S.TextCard $hidden={visible}>
          дата создания: {dateOfCreated}
        </S.TextCard>
      </>
    );
  };

  return (
    <S.ResultBlock>
      {allUsers.items.map((item) => {
        return (
          <S.Card key={item.id}>
            <S.AvatarCard src={item.avatar_url} />
            <S.TextBlock>
              <S.NameCard>{item.login}</S.NameCard>
              <TextAboutUser item={item} setError={props.setError} />
            </S.TextBlock>
          </S.Card>
        );
      })}
    </S.ResultBlock>
  );
};
