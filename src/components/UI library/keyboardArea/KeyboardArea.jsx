import GeneralKey from '../generalKey/GeneralKey';

const KeyBoardArea = ({ data, theme }) => {

  return (
    <div>
      {data.map((item) => <GeneralKey
        keyLabel={item}
        theme={theme}
      />)}
    </div>
  );
}

export default KeyBoardArea;