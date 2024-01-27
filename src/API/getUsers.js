export const getUsersFromGitHub = async (
  searchLogin,
  setSearchResult,
  numberPage,
  setIsCompleteSearch,
  setError,
  order,
  sort
) => {
  const host = "https://api.github.com/search";
  return fetch(
    `${host}/users?q=${searchLogin}&page=${numberPage}&sort=${sort}&order=${order}&per_page=15`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      if (response.status === 403) {
        setError("Слишком много запросов, подождите пару минут");
        throw new Error("Ошибка!");
      }
      if (response.status === 422) {
        setError("Проверка не удалась, или конечная точка подверглась спаму");
        throw new Error("Ошибка!");
      }
      if (response.status === 503) {
        setError("Сервис недоступен");
        throw new Error("Ошибка!");
      }
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      setSearchResult(data);
      setIsCompleteSearch(true);
    })
    .catch((err) => {
      console.warn(err.message);
      if (err === "Failed to fetch") setError("Проверьте соединение");
    });
};

export const getFollowers = async (
  linkFollowers,
  setFollowers,
  setDateOfCreated,
  setError,
  setVisible,
  setRepos
) => {
  return fetch(`${linkFollowers}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.status === 403) {
        setError("Слишком много запросов, подождите пару минут");
        throw new Error("Ошибка!");
      }
      if (response.status === 422) {
        setError("Проверка не удалась, или конечная точка подверглась спаму");
        throw new Error("Ошибка!");
      }
      if (response.status === 503) {
        setError("Сервис недоступен");
        throw new Error("Ошибка!");
      }
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      setFollowers(data.followers);
      setRepos(data.public_repos)
      const date = data.created_at.slice(0, 10);
      setDateOfCreated(date);
      setVisible("block");
      return data;
    })
    .catch((err) => {
      console.warn(err);
    });
};
