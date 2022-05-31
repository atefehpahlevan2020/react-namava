import React, { useEffect } from "react";
import RowList from "../components/list/RowList";
import MovieItem from "../components/MovieItem";
import Slider from "../components/slider/Slider";
import Config from "../config";
import { types,useMenus } from "../context/MenusContext";
import namava from "../utils/namava";


const fetchMenus = async (dispatch) => {
    dispatch({type: types.SET_LOADING})
    let {data : {succeeded,result,error}} = await namava.get('api/v3.0/menus');
    if(succeeded === true && error === null) {
        let homePageIndex = result.findIndex(item => item['slug'] === 'index');
        let home = {};
        if(homePageIndex > -1) {
            home = result[homePageIndex];
        }
        dispatch({
            type : types.SET_DATA,
            home : home,
            data : result,
        })
    }else {
        dispatch({type : types.SET_ERRORS, errors: error})
    }
}


const Home = () => {
    let {state:menus,dispatch} = useMenus();

    useEffect(() => {
        if(menus.loading === false && menus.succeeded === false && menus.errors.length === 0) {
            fetchMenus(dispatch)
        }
    },[dispatch,menus])


    // console.log('Home',menus);
    return(
        <div className="container-fluid">
            <div className="row">
                {(menus.loading === false && menus.succeeded === true) && menus.home.pageItems.map(({payloadType,payloadKey,...pageItem}) => {
                    let section = undefined;

                    switch (payloadType) {
                        case Config.pageItemsType.Slider:
                            section = <Slider key={`page-section-${pageItem['pageItemId']}`} sliderID={payloadKey}/>
                            break;
                        case Config.pageItemsType.PostGroup:
                            let itemComponent = MovieItem;
                            section = <RowList key={`page-section-${pageItem['pageItemId']}`} data={{
                                payloadType,
                                payloadKey,
                                title: pageItem['caption']
                            }} ItemComponent={itemComponent}/>
                            break;
                        default:
                            section = undefined;
                    }

                    return section;
                })}
            </div>
        </div>
    )
}

export default Home;