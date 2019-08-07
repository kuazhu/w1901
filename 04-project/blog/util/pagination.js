/*
* @Author: TomChen
* @Date:   2019-08-04 17:21:51
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-07 15:37:07
*/

/**
 * [pagination description]
 * @param  {[object]} options [参数]
 * page:当前页
 * model:要处理的数据模型
 * query:查询条件
 * sort:排序
 * projection:投影
 * populates:数组,关联的模型
 * 
 * @return {[type]}         [description]
 */
async function pagination(options){
/*
    分页分析:
    前提条件:得知道获取第几页,前端发送参数 page
    约定:每一页显示多少条数据, 约定每页显示2条, limit = 2
    举例:
    1
    2
    3
    4
    5
    6
    第 1 页 显示 第 1,2, 跳过 0 条 skip(0) 取 2 条 limit(2)
    第 2 页 显示 第 3,4, 跳过 2 条 skip(2) 取 2 条 limit(2)
    第 3 页 显示 第 5,6, 跳过 4 条 skip(4) 取 2 条 limit(2)
    
    第 page 页, 跳过 (page-1)*limit 条

 */
    let { page,model,query,sort,projection,populates } = options
    const limit = 2
    page = parseInt(page)
    
    if(isNaN(page)){
        page = 1
    }

    //上一页边界值控制
    if(page == 0){
        page = 1
    }

    const count = await model.countDocuments(query)
    
    //总页数
    const pages = Math.ceil(count / limit)
    
    //下一页边界值控制
    if(page > pages){
        page = pages
    }
    if(page == 0){
        page = 1
    }
    //生成页码数组
    const list = []
    for(let i = 1;i<=pages;i++){
        list.push(i)
    }
    
    const skip = (page-1)*limit

    let result = model.find(query,projection)

    //关联处理
    if(populates){
        populates.forEach(populate=>{
            result = result.populate(populate)
        })
    }


    const docs = await result.sort(sort).skip(skip).limit(limit)

    return {
        docs:docs,
        page:page,
        list:list,
        pages:pages        
    }
}


module.exports = pagination