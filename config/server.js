
Strapi
/
cefad1b6
Failed

Oct 15, 2025, 1:01 AM
strapi-production-8673.up.railway.app
Get Help
Details
Build Logs
Deploy Logs
HTTP Logs

config file // config/server.js module.exports = ({ env }) => ({ host: '0.0.0.0', port: env.int('PORT', 8080), /** * Public URL of your app (what browsers hit). * Set PUBLIC_URL in Railway if you use a custom domain, e.g. * https://admin.salarholdings.pk * Fallbacks to Railway’s provided domain. */ url: env('PUBLIC_URL', env('RAILWAY_PUBLIC_DOMAIN', '')), /** * Trust Railway’s proxy so Strapi builds correct absolute URLs * from X-Forwarded-* headers. */ proxy: true, app: { // REQUIRED: set APP_KEYS in Railway (comma-separated) keys: env.array('APP_KEYS'), }, }); does not exist
