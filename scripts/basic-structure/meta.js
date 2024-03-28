export function setTitle(newTitle) {
    document.title = newTitle;
}

export function setViewLang(locale) {
    document.querySelector("html").setAttribute("lang", locale);
    localStorage.setItem("lang", locale);
}

export function setViewTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

export function getViewLang() {
    return localStorage.getItem("lang");
}

export function getViewTheme() {
    return localStorage.getItem("theme");
}

export function setDescription(newDescription) {
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
        descriptionTag.setAttribute('content', newDescription);
    } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('name', 'description');
        newMetaTag.setAttribute('content', newDescription);
        document.head.appendChild(newMetaTag);
    }
}

export function setOGTitle(newOGTitle) {
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
        ogTitleTag.setAttribute('content', newOGTitle);
    } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('property', 'og:title');
        newMetaTag.setAttribute('content', newOGTitle);
        document.head.appendChild(newMetaTag);
    }
}

export function setTwitterTitle(newTwitterTitle) {
    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleTag) {
        twitterTitleTag.setAttribute('content', newTwitterTitle);
    } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('name', 'twitter:title');
        newMetaTag.setAttribute('content', newTwitterTitle);
        document.head.appendChild(newMetaTag);
    }
}

export function setOGDescription(newOGDescription) {
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
        ogDescriptionTag.setAttribute('content', newOGDescription);
    } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('name', 'og:description');
        newMetaTag.setAttribute('content', newOGDescription);
        document.head.appendChild(newMetaTag);
    }
}

export function setTwitterDescription(newTwitterDescription) {
    const ogDescriptionTag = document.querySelector('meta[name="twitter:description"]');
    if (ogDescriptionTag) {
        ogDescriptionTag.setAttribute('content', newTwitterDescription);
    } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('name', 'twitter:description');
        newMetaTag.setAttribute('content', newTwitterDescription);
        document.head.appendChild(newMetaTag);
    }
}

export function setOGUrl(newOGUrl) {
    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
        ogUrlTag.setAttribute('content', newOGUrl);
    } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('property', 'og:url');
        newMetaTag.setAttribute('content', newOGUrl);
        document.head.appendChild(newMetaTag);
    }
}

export function setTwitterUrl(newTwitterUrl) {
    const twitterUrlTag = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrlTag) {
        twitterUrlTag.setAttribute('content', newTwitterUrl);
    } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.setAttribute('property', 'twitter:url');
        newMetaTag.setAttribute('content', newTwitterUrl);
        document.head.appendChild(newMetaTag);
    }
}