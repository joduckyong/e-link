import { serverUrl } from '../store/serverUrl';

export const downloadFile = (fileNm, fileOriginNm) => {
    let url = `${serverUrl}/api/file/download/${fileNm}`;
  
    fetch(url, { method: 'GET' })
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