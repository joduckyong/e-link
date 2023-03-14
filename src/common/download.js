import { getCookieToken } from '../storage/Cookie';
export const downloadFile = (fileNm, fileOriginNm) => {
  let url = `${process.env.REACT_APP_API_URL}/api/file/download/${fileNm}`;
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
      const a = document.createElement('a');
      a.href = url;
      a.download = fileOriginNm;
      document.body.appendChild(a);
      a.click();
      setTimeout((_) => {
        window.URL.revokeObjectURL(url);
      }, 60000);
      a.remove();
    })
    .catch((err) => {
      console.error('err: ', err);
    });
};

export const zipDownloadFile = (fileNm, fileOriginNm) => {
  let url = `${process.env.REACT_APP_API_URL}/api/file/zip/${fileNm}`;
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
      const a = document.createElement('a');
      a.href = url;
      a.download = fileOriginNm;
      document.body.appendChild(a);
      a.click();
      setTimeout((_) => {
        window.URL.revokeObjectURL(url);
      }, 60000);
      a.remove();
    })
    .catch((err) => {
      console.error('err: ', err);
    });
};
