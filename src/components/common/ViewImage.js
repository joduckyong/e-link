import React, { useState, useEffect } from 'react';
import { serverUrl } from '../../store/serverUrl';
import { getCookieToken } from '../../storage/Cookie';

const ViewImage = ({ fileNm, width, height }) => {
  const [objectUrl, setObjectUrl] = useState('');
  const url = `${serverUrl}/api/file/image/${fileNm}`;

  useEffect(() => {
    if (fileNm) {
      const token = getCookieToken();

      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      })
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

  // console.log('width : ' + width);
  // console.log('height : ' + height);
  return <img src={objectUrl} alt="" width={width} height={height} />;
};

export default ViewImage;
