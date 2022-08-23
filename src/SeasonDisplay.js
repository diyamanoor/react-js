import React from 'react';

const getSeasion = (lat, month) => {
    if(month >2 && month < 9){
       return lat > 0 ? 'Summer' : 'winter';
    }else{
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = props =>{
    const season = getSeasion(props.lat,new Date().getMonth());
    console.log(season);
};

export default SeasonDisplay;