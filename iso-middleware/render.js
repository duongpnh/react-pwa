export default (content, preloadedState) => {

    return (
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta name="Description" content="Author: Danny">
                <meta name="theme-color" content="#317EFB"/>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link type="text/css" rel="shortcut icon" href="/images/anonymous.png" />
                <!-- Tell the browser it's a PWA -->
                <meta name="mobile-web-app-capable" content="yes">
                <!-- Tell iOS it's a PWA -->
                <meta name="apple-mobile-web-app-capable" content="yes">
                <title>Anonymous</title>
                <link type="text/css" href="/css/font-awesome.min.css" rel="stylesheet" />
                <link type="text/css" href="/css/app.css" rel="stylesheet">
            </head>
            <body>
                <div id="root">${content}</div>
                <noscript>This website requires JavaScript.</noscript>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                        /</g,
                        '\\u003c'
                    )}
                </script>
                <script type="text/javascript" src="/js/vendors~app.js"></script>
                <script src="/js/app.js"></script>
            </body>
        </html>
        `
    )
}

