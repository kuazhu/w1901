/*
* @Author: TomChen
* @Date:   2019-08-12 15:11:47
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-19 16:29:35
*/
import api from 'api'
import { message } from 'antd'

import * as types  from './actionTypes.js'

import { saveUsername } from 'util'

const getPageReqestStartAction = ()=>({
    type:types.PAGE_REQEST_START,
})
const getPageReqestDoneAction = ()=>({
    type:types.PAGE_REQEST_DONE,
})

const getSetPageAction = (payload)=>({
    type:types.SET_PAGE,
    payload
})

const setCategoriesAction = (payload)=>({
    type:types.SET_CATEGORIES,
    payload
})

export const setMainImageAction = (payload)=>({
    type:types.SET_MAIN_IMAGE,
    payload
})
export const setImagesAction = (payload)=>({
    type:types.SET_IMAGES,
    payload
})
export const setDetailAction = (payload)=>({
    type:types.SET_DETAIL,
    payload
})


export const getSaveAction = (values)=>{
    return (dispatch,getState)=>{
        console.log('values',values)
        const state = getState().get('product')
        const mainImage = state.get('mainImage')
        const images = state.get('images')
        const detail = state.get('detail')
        console.log('mainImage',mainImage)
        console.log('images',images)
        console.log('detail',detail)
        /*
        api.addCategories(values)
        .then(result=>{
            if(result.code == 0){
                message.success('添加分类成功')
                dispatch(setCategoriesAction(result.data))
            }else{
                message.error(result.message)
            }
            
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })
        */              
    }
}
export const getLevelCategoriesAction = ()=>{
    return (dispatch,getState)=>{
        api.getlevelCategories({
            level:3
        })
        .then(result=>{
            if(result.code == 0){
                dispatch(setCategoriesAction(result.data))
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })              
    }
}
export const getPageAction = (page)=>{
    return (dispatch,getState)=>{
        dispatch(getPageReqestStartAction())
        api.getCategoriesList({
            page:page
        })
        .then(result=>{
            if(result.code == 0){
                dispatch(getSetPageAction(result.data))
            }else{
                message.error('获取分类数据失败,请稍后再试')
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })
        .finally(()=>{
            dispatch(getPageReqestDoneAction())
        })                 
    }
}
export const getUpdateNameAction = (id,newName)=>{
    return (dispatch,getState)=>{
        const page = getState().get('category').get('current')
        api.updateCategoriesName({
            id:id,
            name:newName,
            page:page
        })
        .then(result=>{
            if(result.code == 0){
                message.success('更新分类名称成功')
                dispatch(getSetPageAction(result.data))
            }else{
                message.error(result.message)
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })               
    }
}
export const getUpdateMobileNameAction = (id,newMobileName)=>{
    return (dispatch,getState)=>{
        const page = getState().get('category').get('current')
        api.updateCategoriesMobileName({
            id:id,
            mobileName:newMobileName,
            page:page
        })
        .then(result=>{
            if(result.code == 0){
                message.success('更新手机分类名称成功')
                dispatch(getSetPageAction(result.data))
            }else{
                message.error(result.message)
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })               
    }
}
export const getUpdateOrderAction = (id,newOrder)=>{
    return (dispatch,getState)=>{
        const page = getState().get('category').get('current')
        api.updateCategoriesOrder({
            id:id,
            order:newOrder,
            page:page
        })
        .then(result=>{
            if(result.code == 0){
                message.success('更新排序成功')
                dispatch(getSetPageAction(result.data))
            }else{
                message.error(result.message)
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })               
    }
}
export const getUpdateUpdateIsShowAction = (id,newIsShow)=>{
    return (dispatch,getState)=>{
        const page = getState().get('category').get('current')
        api.updateCategoriesIsShow({
            id:id,
            isShow:newIsShow,
            page:page
        })
        .then(result=>{
            if(result.code == 0){
                message.success('更新显示隐藏成功')
                dispatch(getSetPageAction(result.data))
            }else{
                message.error(result.message)
            }
        })
        .catch(err=>{
            message.error('网络错误,请稍后再试')
        })               
    }
}


