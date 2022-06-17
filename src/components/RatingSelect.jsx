import React, { useContext } from "react";
import Context from "./context/FeedbackContext";
function RatingSelect() {
  const { setComp, comp } = useContext(Context);
  const clickHandler = (e) => {
    if (e.target.value === "true") {
      setComp(true);
    } else {
      setComp(false);
    }
  };
  return (
    <>
      <ul className="rating">
        <div className="true-false">
          <input
            type="button"
            value="true"
            onClick={clickHandler}
            className="mr-4"
          />
        </div>
        <div className="true-false">
          <input type="button" value="false" onClick={clickHandler} />
        </div>
      </ul>
      {comp && <p className="h4  text-center text-info"> Completed</p>}
      {!comp && <p className="h4  text-center text-warning"> UnCompleted</p>}
    </>
  );
}

export default RatingSelect;
