// https://h5.m.taobao.com/mlapp/cart.html  淘宝购物车 获取对应店铺下的商品

/**
 * 拿到店铺名
 * @param itemClass
 * @returns {string}
 */
function getShopName(itemClass) { //document.getElementsByClassName("bundlev2")[0];
    var first=itemClass.firstElementChild.firstElementChild.firstElementChild;
    var second=first.childNodes[2].firstElementChild.firstElementChild;
    return  second.innerText;
}


/**
 * 拿到这个店铺下所有商品名字
 */
function getShopGoods(itemClass,shopName) {//document.getElementsByClassName("bundlev2")[0];
  //  console.log("shop:"+shopName);
    var group=itemClass.lastElementChild;//这里下面多个商品
    var maps = {};
    var array=new Array();
    for (var i=0;i<group.childElementCount;i++) {
        var item=group.childNodes[i];
        // var second=item.firstElementChild.firstElementChild.firstElementChild.childNodes[1];
        var second=item.firstElementChild.firstElementChild.childNodes[1];
        var third=second.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
        array[i]=third.innerText;
    }
    maps[shopName]=array;
    return maps;
}

/**
 * 拿到店铺下的店铺名和商品名
 * @param itemClass
 */
function getSingleItem(itemClass) {
    return getShopGoods(itemClass,getShopName(itemClass))
}


function getAll() {
    var maps = {};
    var all=document.getElementsByClassName("allItemv2")[0];
    for (var i=0;i<all.childElementCount;i++) {
        var item=all.childNodes[i];
        if(item.getAttribute("data-spm")=="bundlev2"){
            result=getSingleItem(item);
            for(var key in result){
                maps[key]=result[key];
            }
        }
    }
    var map2json=JSON.stringify(maps);
    return map2json;
}

