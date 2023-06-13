import request from '../tool/request';

export function articleCat_add(data){
    return request({
        url: `api/articleCat/add`,
		method: 'post',
        data
    });
}

export function articleCat_all(){
    return request({
        url: `api/articleCat/all`,
		method: 'get',
    });
}

export function articleCat_cateName(data){
    return request({
        url: `api/articleCat/check/${data}`,
		method: 'get',
    });
}

export function articleCat_delete(data){
    return request({
        url: `api/articleCat/delete?id=${data}`,
		method: 'get',
    });
}

export function articleCat_edit(data){
    return request({
        url: `api/articleCat/edit`,
		method: 'post',
        data
    });
}

export function articleCat_one(data){
    return request({
        url: `api/articleCat/one?id=${data}`,
		method: 'get',
    });
}

export function articleCat_colums(data){
    return request({
        url: `api/articleCat?colums=${data}`,
		method: 'get',
    });
}
