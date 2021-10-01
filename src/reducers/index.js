let url = [null];
let testInput = "mirzapur";
let trendingMeme = [{ }];

let SetUrl = (state = url, action) => {
    switch (action.type) {
        case "ADDURL":
            let newUrlArr = [...state, action.payload];
            return newUrlArr;
            break;

        case "NULLINPUT":
            let nullify = [null];
            return nullify;
            break;


        default: return state;

    }
}

let TrendingMemeReducer = (state1 = trendingMeme,action1)=>{
    switch (action1.type) {
        case "TRENDINGMEME":
            let newTrendingObj = [...state1,action1.payload];
            return newTrendingObj;

    default: return state1;
    }
}



export { SetUrl,TrendingMemeReducer};