// Make a cookie
// Cookie parameters: key-value, expire-date(max-age), path
document.cookie = "hello=true; expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/";
// Reset cookie(make date expires)
document.cookie = "hello=true; expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
// Log cookie
console.log(document.cookie);