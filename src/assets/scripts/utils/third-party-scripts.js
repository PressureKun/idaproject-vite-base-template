export const scriptsList = [ // Ya.Metrika | MUST BE FIRST !!! Don't touch it
    {
        innerHTML: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(96145729, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});
    `,
        async: true,
    },
];

export const handleSetHeadSrc = scriptItem => {
    const script = document.createElement('script');
    script.type = 'text/javascript';

    if (scriptItem.async) {
        script.async = true;
    }

    script.src = scriptItem.src;
    document.head.appendChild(script);
};

export const handleSetHeadScript = (scriptItem, idx) => {
    const script = document.createElement('script');
    if (scriptItem.async) {
        script.async = true;
    }

    script.text = scriptItem.innerHTML;
    script.id = `script_${idx}`;
    document.head.appendChild(script);
    const found = document.querySelector(`script[id="script_${idx}"]`);

    if (found) {
        found.removeAttribute('id');
        found.parentNode.insertBefore(script, found);
    }
};

export const handleAddScripts = (array = scriptsList) => {
    if (!array?.length) {
        return;
    }
    array.forEach((scriptItem, id) => {
        if (scriptItem.src) {
            handleSetHeadSrc(scriptItem);
        } else if (scriptItem.innerHTML) {
            handleSetHeadScript(scriptItem, id);
        }
    });
};
