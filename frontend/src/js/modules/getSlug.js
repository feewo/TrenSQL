function getSlug(position) {
    return window.location.pathname.split('/').slice(2)[position];
}

export default getSlug;