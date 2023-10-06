import { environment } from "./environments/environment.development"

const PROXY_CONFIG = [
    {
        context: [
            "/v1"
        ],
        target: environment.apiUrl,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
]

module.exports = PROXY_CONFIG