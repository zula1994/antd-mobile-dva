import request from '../utils/request';
import querystring from 'querystring';
var baseUrl = 'http://localhost:8088/';
function get(url, params) {
    const str = params ?
        querystring.encode(params) :
        "";
    var url = str ?
        baseUrl + url + "?" + str :
        baseUrl + url;
    var reqHeaders = new Headers();
    reqHeaders.set("Content-Type", "application/x-www-form-urlencoded");
    return new Request(url, {
        method: 'get',
        headers: reqHeaders
    });

}
function post(url, params) {
    const str = querystring.encode(params);
    var url = baseUrl + url;
    var reqHeaders = new Headers();
    reqHeaders.set("Content-Type", "application/x-www-form-urlencoded");
    return new Request(url, {
        method: 'post',
        headers: reqHeaders,
        body: str
    });
}
export async function logoutApi(params) {
    var req = post('test/index.php', params);
    return request(req);
}