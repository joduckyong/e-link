import React, { useState, useEffect } from 'react';
import { serverUrl } from '../../store/serverUrl';
import { getCookieToken } from '../../storage/Cookie';

const ViewImage = ({ fileNm, width, height }) => {
  const [objectUrl, setObjectUrl] = useState('');
  const url = `${serverUrl}/api/file/image/${fileNm}`;

  useEffect(() => {
    if (fileNm) {
      const showImage = async () => {
        const token = getCookieToken();
    
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              Authorization: token,
            },
          })
    
          const blob = await response.blob();
          const objUrl = window.URL.createObjectURL(blob);
          setObjectUrl(objUrl);
    
          setTimeout((_) => {
            window.URL.revokeObjectURL(objUrl);
          }, 60000);
      }

      showImage();
    }
    
  }, [fileNm, url]);

  // console.log('width : ' + width);
  // console.log('height : ' + height);
  return <img src={objectUrl} alt="" width={width} height={height} />;
};

export default ViewImage;
