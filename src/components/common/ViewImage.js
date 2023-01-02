import React, { useState, useEffect } from 'react';
import { serverUrl } from '../../store/serverUrl';

const ViewImage = ({fileNm}) => {

    const [objectUrl, setObjectUrl] = useState('');
    const url = `${serverUrl}/api/file/image/${fileNm}`;
  
    useEffect(() => {
        if(fileNm){
            fetch(url, { method: 'GET' })
                .then((res) => {
                    return res.blob();
                })
                .then((blob) => {
                    const url = window.URL.createObjectURL(blob);
                    setObjectUrl(url);
                    
                    setTimeout((_) => {
                        window.URL.revokeObjectURL(url);
                    }, 60000);
                    
                })
                .catch((err) => {
                    console.error('err: ', err);
                });
            }
    }, [fileNm, url]);

    return (
        <img src={objectUrl} alt=""/>
    )
}

export default ViewImage;