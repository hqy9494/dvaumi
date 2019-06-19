import request from '../utils/request';

export function getAllUser(playload) {
    return request({
        url: '/form/sel',
        method:'get'
    })
}
export function addTable(playload) {
    return request({
        url: '/form/add',
        method:'post',
        params: playload
    })
}