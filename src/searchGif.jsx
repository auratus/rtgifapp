import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


import GifArea from "./gifArea";

function SearchGif() {

    let [urls, setUrls] = useState("smile");
    let selector = useSelector((store) => store.SetUrl);
    

    return (
        <>
            <GifArea imgArr={selector} />
        </>
    );
}

export default SearchGif;