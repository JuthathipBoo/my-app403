const AlertBox = ({
  alertText,
  alertButtonText,
  isShow,
  onclick,
}: {
  alertText: string;
  alertButtonText: string;
  isShow: boolean;
  onclick: any;
}) => {
  return (
    <div
      style={{
        backgroundColor: "green",
        color: "white",
        display: isShow ? "" : "none",
      }}
    >
      <label id="txtAlertText">{alertText}</label>
      <button id="btnAlertOK" type="button" onClick={onclick}>
        {alertButtonText}
      </button>
    </div>
  );
};

export default AlertBox;
