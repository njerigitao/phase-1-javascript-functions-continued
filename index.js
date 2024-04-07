// Define saturdayFun function
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
//Define mondayWork function as a function expression
const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
//Define wrapAdjective function
function wrapAdjective(ines = "*"){
    return function(adjective){
        return `You are ${ines}${adjective}${ines}!`;
    }
}