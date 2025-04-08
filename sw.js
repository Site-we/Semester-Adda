self.addEventListener("fetch", (event) => {
    event.respondWith(
        (async () => {
            const userAgent = event.request.headers.get("user-agent");
            const allowedUserAgent = "Mozilla/5.0 (Linux; Android 15; GhostDevice 99) AppleWebKit/999.99 (KHTML, like Gecko) PhantomBrowser/10.0 Mobile Safari/999.99";
            
            if (userAgent !== allowedUserAgent) {
                return new Response("<h2>Access Denied</h2><p>This webpage can only be viewed inside the Gtech-poly Unofficial app.</p>", {
                    headers: { "Content-Type": "text/html" }
                });
            }
            
            return fetch(event.request);
        })()
    );
});
