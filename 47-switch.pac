// Generated by gfwlist2pac
// https://github.com/clowwindy/gfwlist2pac
var proxy_goagent = "PROXY 127.0.0.1:8087;"
var proxy_ss = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080;";

function FindProxyForURL(url, host) {
    if (shExpMatch(myIpAddress(), "192.*"))
        return proxy_ss;
    else
        return proxy_goagent;
}
