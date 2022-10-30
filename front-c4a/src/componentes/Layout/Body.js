import React from 'react';
//import { Grid } from '@mui/Stack/Grid';

const Body = () => {
    let prueba=[];

    for(let i=0; i<8; i++){
        prueba.push(
            React.createElement(
                        "div",
                        {  },
                        React.createElement(
                            "img",
                            { src: "https://img.asmedia.epimg.net/resizer/K8BK0UV3TAYniv5tW3DCKnG6nno=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/D56EEJ2ZXBIOFGPHEYLA4AXHVI.jpg" },
                            )
                        ));
    }
    return (
        //display: grid
        //React.createElement("div", {style: {display: grid, gridTemplateColumns: 4}, prueba})
        //<Grid columns="1fr 1fr 1fr 1fr">
                prueba
          //  </Grid>
        //React.createElement("div", {style: {display: grid, gridTemplateColumns: 4}, prueba})

        //prueba
        /*
        React.createElement(
            "div",
            {  },
            React.createElement(
                "img",
                { src: "https://img.asmedia.epimg.net/resizer/K8BK0UV3TAYniv5tW3DCKnG6nno=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/D56EEJ2ZXBIOFGPHEYLA4AXHVI.jpg" },
                )
            )
            */
    );
}

export default Body;