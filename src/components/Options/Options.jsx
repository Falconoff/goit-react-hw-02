// import React from 'react'

const Options = ({
  feedbacks,
  updateFeedback,
  totalFeedback,
  resetFeedbacks,
}) => {
  console.log('feedbacks: ', feedbacks);
  console.log('totalFeedback: ', totalFeedback);

  // const feedbacksArr = Object.keys(feedbacks);
  // console.log(feedbacksArr);

  // const feedbackBtn = feedbacksArr.map(fbType => {
  //   console.log('fbType: ', fbType);
  //   return (
  //     <button
  //       type="button"
  //       key={fbType}
  //       onClick={() => {
  //         updateFeedback({ fbType });
  //       }}
  //     >
  //       {fbType.toUpperCase()}
  //     </button>
  //   );
  // });

  // console.log('feedbackBtn: ', feedbackBtn);

  return (
    <div>
      {/* {feedbackBtn} */}
      {/* {feedbacksArr.map(item =>{
        <button
          type="button"
          onClick={() => {
            updateFeedback({item});
          }}
        ></button>
      }}; */}

      <button
        type="button"
        onClick={() => {
          updateFeedback('good');
        }}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback('bad');
        }}
      >
        Bad
      </button>

      <button
        type="button"
        onClick={() => {
          resetFeedbacks();
        }}
      >
        Reset
      </button>
      {/* {totalFeedback > 0} */}
    </div>
  );
};

export default Options;
