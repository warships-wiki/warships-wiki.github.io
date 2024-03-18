function createMetaTag(tagName, attributes) {
    const tag = document.createElement(tagName);
    for (const [key, value] of Object.entries(attributes)) {
        tag.setAttribute(key, value);
    }
    return tag;
}

export async function createMetaData(title, description, currentPath) {
    const head = document.querySelector('head');

    const metaCharset = createMetaTag('meta', {charset: 'UTF-8'});
    const metaViewport = createMetaTag('meta', {name: 'viewport', content: 'width=device-width, initial-scale=1.0'});
    const faviconLink = createMetaTag('link', {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: './assets/main-icon.png'
    });
    const flagIconsLink = createMetaTag('link', {
        rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css'
    });
    const fontAwesomeLink = createMetaTag('link', {
        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    });
    const mainStylesLink = createMetaTag('link', {rel: 'stylesheet', href: './styles/main.css'});

    head.appendChild(metaCharset);
    head.appendChild(metaViewport);
    head.appendChild(faviconLink);
    head.appendChild(flagIconsLink);
    head.appendChild(fontAwesomeLink);
    head.appendChild(mainStylesLink);

    const titleTag = document.createElement('title');
    titleTag.textContent = title;
    head.appendChild(titleTag);

    const descriptionMeta = createMetaTag('meta', {name: 'description', content: description});
    head.appendChild(descriptionMeta);

    // Facebook Meta Tags
    const ogUrlMeta = createMetaTag('meta', {property: 'og:url', content: currentPath});
    const ogTypeMeta = createMetaTag('meta', {property: 'og:type', content: 'website'});
    const ogTitleMeta = createMetaTag('meta', {property: 'og:title', content: title});
    const ogDescriptionMeta = createMetaTag('meta', {property: 'og:description', content: description});
    const ogImageMeta = createMetaTag('meta', {
        property: 'og:image', content: 'https://warships-wiki.github.io/assets/main-banner.jpg'
    });
    head.appendChild(ogUrlMeta);
    head.appendChild(ogTypeMeta);
    head.appendChild(ogTitleMeta);
    head.appendChild(ogDescriptionMeta);
    head.appendChild(ogImageMeta);

    // Twitter Meta Tags
    const twitterCardMeta = createMetaTag('meta', {name: 'twitter:card', content: 'summary_large_image'});
    const twitterDomainMeta = createMetaTag('meta', {property: 'twitter:domain', content: 'warships-wiki.github.io'});
    const twitterUrlMeta = createMetaTag('meta', {property: 'twitter:url', content: currentPath});
    const twitterTitleMeta = createMetaTag('meta', {name: 'twitter:title', content: title});
    const twitterDescriptionMeta = createMetaTag('meta', {name: 'twitter:description', content: description});
    const twitterImageMeta = createMetaTag('meta', {
        name: 'twitter:image', content: 'https://warships-wiki.github.io/assets/main-banner.jpg'
    });
    head.appendChild(twitterCardMeta);
    head.appendChild(twitterDomainMeta);
    head.appendChild(twitterUrlMeta);
    head.appendChild(twitterTitleMeta);
    head.appendChild(twitterDescriptionMeta);
    head.appendChild(twitterImageMeta);
}