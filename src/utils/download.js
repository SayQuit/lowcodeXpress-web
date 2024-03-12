export const downloadFile = (res, id, type) => {
    const blob = new Blob([res.data], { type: res.headers['content-type'] });

    const contentDisposition = res.headers['content-disposition'];
    const match = contentDisposition && contentDisposition.match(/attachment; filename=([^"]+)/);
    const filename = match ? match[1] : `${id}.${type}`;
    console.log(filename);

    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        const link = document.createElement('a');

        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', filename);

        if (typeof link.download === 'undefined') {
            link.setAttribute('target', '_blank');
        }

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
