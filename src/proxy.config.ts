const PROXY_CONFIG = [
    {
        context: [
            "/v1"
        ],
        target: "http://localhost:8080",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
]

module.exports = PROXY_CONFIG