export const downloadFile = (name: string) => {
    const link = document.createElement('a');
    link.href = name;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
