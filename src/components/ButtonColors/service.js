import {
    buttonColorAddRequest,
    buttonColorAddRequestSuccess,
} from "./actions";

export const buttonColorChange = (colors, previousColor) => {
  return (dispatch) => {
      dispatch(buttonColorAddRequest());
      if(previousColor){
          switch(previousColor) {
              case 'blue':
                  dispatch(buttonColorAddRequestSuccess(colors.find(item => item === 'green')));
                  break;

              default:
                  let tempArray = colors.filter(item => item !== previousColor);
                  let tempColorIndex = Math.floor(Math.random() * 4);
                      dispatch(buttonColorAddRequestSuccess(tempArray[tempColorIndex]));
          }
      }
      else {
          let tempColorIndex = Math.floor(Math.random() * 5);
          dispatch(buttonColorAddRequestSuccess(colors[tempColorIndex]));
      }
  }
}