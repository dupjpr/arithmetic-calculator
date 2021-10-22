import './generalKey.style.scss';

const GeneralKey = ({ keyLabel, theme }) => {
  return (
    <div className={`container-basicKey ${theme}`} >
      {keyLabel}
    </div>
  );
}

export default GeneralKey;