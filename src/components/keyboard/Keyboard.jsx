import { useSelector } from "react-redux";

import KeyBoardArea from "../UI library/keyboardArea/KeyboardArea";

const Keyboard = () => {

  const storeData = useSelector(state => state.keyBoardLabels);

  const { numbers, operations, utilities } = storeData;

  return (
    <div>
      <KeyBoardArea
        data={utilities}
        theme='container-basicKey-dark'
      />
      <KeyBoardArea
        data={numbers}
        theme='container-basicKey-clearDark'

      />
      <KeyBoardArea
        data={operations}
        theme='container-basicKey-orange'
      />
    </div>
  );
}

export default Keyboard;