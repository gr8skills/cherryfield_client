
const extractActiveLinkText = (currentPath, targetLinkArray) => {
    const path = currentPath.split('/')[2];
    if (!path) {
        return targetLinkArray.find(item => item.path === '').text || null;
    }
    const link = targetLinkArray.find(item => item.path === path)

    return link.text || null;
};

export {extractActiveLinkText};
