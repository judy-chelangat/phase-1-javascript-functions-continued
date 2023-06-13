// code your solution here
function saturdayFun(activity="roller-skate"){
return `This Saturday, I want to ${activity}!`
}

function mondayWork(message="go to the office"){
    return `This Monday, I will ${message}.`
}

function wrapAdjective(string="*"){
    return function(special1="special"){
        return `You are ${string}${special1}${string}!`
    }
}
wrapAdjective("%")("a dedicated programmer")