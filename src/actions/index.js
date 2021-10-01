 function addUrl(payload){
    return{
        type:"ADDURL",
        payload:payload,
    }
}

function NullInput(payload){
    return{
        type:"NULLINPUT",
        payload:payload,
    }
}

function TrendingMeme(payload){
    return{
        type:"TRENDINGMEME",
        payload:payload,
    }
}

export {addUrl,NullInput,TrendingMeme};