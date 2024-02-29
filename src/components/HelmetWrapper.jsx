// HelmetWrapper.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSEOData, selectSEOData } from '../redux/reducers/seoReducer';
import { getApi } from '../services/axiosInterceptors';

const HelmetWrapper = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    console.log("location", location.pathname)
    const seoData = useSelector((state) => state.seo);

    const fetchData = async () => {
        await getApi(`seo/page?page=${location.pathname}`)
            .then((response) => {
                console.log("response", response.data.data)
                dispatch(setSEOData(response.data.data));
            })
            .catch((error) => console.log(error));
        // Update Redux state with the fetched SEO data
    };
    // Simulate fetching SEO data on component mount and whenever the location changes
    useEffect(() => {
        fetchData();
    }, [location.pathname]);
    console.log("seoData", seoData)
    return (
        <Helmet>
            <title>{seoData?.title || 'Default Title'}</title>
            <meta name="description" content={seoData?.description || 'Default Description'} />
            {/* Add other meta tags as needed */}

        </Helmet>
    );
};

export default HelmetWrapper;
