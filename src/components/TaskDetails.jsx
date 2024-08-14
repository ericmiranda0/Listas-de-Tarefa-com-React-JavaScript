import React from "react";
import Button from "./Button";
import { useHistory, useParams } from "react-router-dom";

import "./Button.css";
import "./TaskDetails.css";

const TaskDetails = () => {
  const param = useParams();
  const history = useHistory();
  console.log(param);

  const handleBackButtonClick = () => {
    history.goBack();
  };
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{param.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia harum
          minus, labore tempore assumenda impedit doloremque ratione illum,
          repellat, mollitia veritatis nesciunt est qui atque delectus aliquid.
          Rem, asperiores dolor.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
