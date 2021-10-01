import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeGif from "./HomeGif";
import Homesticker from "./Homesticker";
import { BrowserRouter } from "react-router-dom";
import Error from "./Error";

function SwitchNav() {
    return (
        <>

            <Switch>
                <Route exact path="/" component={HomeGif} />
                <Route exact={true} path="/homesticker" component={Homesticker} />
                <Route component={Error} />
            </Switch>


        </>
    );
}

export default SwitchNav;