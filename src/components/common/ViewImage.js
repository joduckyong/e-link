import React, { useState, useEffect } from 'react';
import { serverUrl } from '../../store/serverUrl';
import { getCookieToken } from '../../storage/Cookie';

const ViewImage = ({ fileNm }) => {
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

  return <img src={objectUrl} alt="" />;
};

export default ViewImage;
