import * as S from "./pageList.styled";
export const PageList = (props) => {
  const choicePage = async (index) => {
    if (index === props.numberPage) {
      return;
    } else {
      props.setNumberPage(index);
      return;
    }
  };
  return (
    <S.PageList>
      {new Array(10).fill(0).map((any, index) => {
        return (
          <S.Page
            key={index}
            onClick={() => {
              choicePage(index + 1);
            }}
          >
            <p>{index + 1}</p>
          </S.Page>
        );
      })}
    </S.PageList>
  );
};
