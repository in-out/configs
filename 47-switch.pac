// Generated by gfwlist2pac
// https://github.com/clowwindy/gfwlist2pac
var proxy_ga = "PROXY 127.0.0.1:8087;"
var proxy_ss = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080;";
var switch_byip = false;

function FindProxyForURL(url, host) {
    if switch_byip
        if (shExpMatch(myIpAddress(), "192.*"))
            return proxy_ss;
        else
            return proxy_ga;
    else
        return proxy_ss;
}