export const getColorFromPercentage = (percentage) =>{
    const red = Math.max(0, 255 - (percentage * 2.55));
    const green = Math.min(255, percentage * 2.55); 
    return `rgb(${red}, ${green}, 0)`; 
  }