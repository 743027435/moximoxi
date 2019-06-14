$(function(){
    var search = decodeURI(window.location.search.slice(1));
    // console.log(search);
    var data = {};
    var arr = search.split("&");
    // console.log(arr);
    for(var i =0;i<arr.length;i++){
        var current = arr[i].split("=");
        // console.log(current[0],current[1]);
        var key   = current[0];
        var value = current[1];
        data[key] = value;
    }
    console.log(data);
var html = "";
        
         html = ` <div class="hyb-dinfo-box"  id = ${data.id}>
                
                <div class="hyb-dinfo-box-left">
                    <div class="goodspage-huodong-icon-0" style="position: absolute; top: 0px; left: 0px; z-index: 1;">
                        
                    </div>
                    <div class="hyb-p-pic">
                        
                        <img src="${data.bigpic}" class="jqzoom">
                        
                    </div>
                    <div class="hyb-p-list hyb-spec-list">
                        <ul>
                            
                            <li>
                                <img src="${data.src}" width="55" height="55" mid="${data.src}" big="${data.bigpic}"></li>
                            
                        </ul>
                    </div>
                    <a href="javascript:void(0);" class="hyb-pic-leftBtn hyb-com-picBtn"></a><a href="javascript:void(0);" class="hyb-pic-rightBtn hyb-com-picBtn"></a>
                </div>
                <!--end hyb-dinfo-box-left-->
                <div class="hyb-dinfo-box-center">
                    <dl>
                        <dt>
                            <h1>
                                ${data.title}
                            </h1>
                        </dt>
                        
                        <dd class="hyb-p-price">
                            <ul>
                                <li>价格：¥<span class="hyb-price-money" id="em-pricecny">${data.sales}</span>
                                    
                                </li>
                                <li>市场价：<span class="hyb-price-ago">¥${data.shichang}</span></li>
                            </ul>
                        </dd>
                        <dd class="hyb-p-place">
                            <ul>
                                <li class="hyb-p-li1">品牌：一蘭</li>
                                <li class="hyb-p-li2">产地：日本</li>
                                <li class="hyb-p-li3">所属国：日本</li>
                            </ul>
                        </dd>
                        <dd class="hyb-pcom-dd">
                            <div class="hyb-p-dt">
                                编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：
                            </div>
                            68147(636754698803535580)
                        </dd>
                        <dd class="hyb-pcom-dd" id="tr_collectnew_tax" style="display: none;">
                            <div class="hyb-p-dt">
                                税&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;率：
                            </div>
                            <span id="taxtipbox"><b style="margin: 0px 15px 0px 0px; color: #111111;">以上价格不含税[税率:10%]</b><a href="http://www.moximoxi.net/HelpItem-24.html" target="_blank"> 查看集装功略</a></span>
                        </dd>
                        <dd class="hyb-pcom-dd hyb-p-has" id="table_201409301623">
                            <div class="hyb-p-dt">
                                库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存：
                            </div>
                            <div class="hyb-p-dd" id="goods-stock">
                                <div id="div-stock-defalut" style="display: none;">
                                    剩余 <em id="em-defaultstockcount" class="hyb-remainder">989</em> 件
                                </div>
                                <span id="div-stock-pur" style="" class="btn-stock hyb-p-active" stock-type="0">日本发货
                                    <b class="hyb-right-red"></b><em id="em-purstockcount" style="display: none;">989</em>
                                </span><span id="div-stock-cn" style="display: none;" class="btn-stock" stock-type="2">上海发货<b class="hyb-right-red"></b> <em id="em-chinastockcount" style="display: none;">0</em></span><span id="div-stock-jp_1" style="display: none;" class="btn-stock" stock-type="1">大阪发货 <b class="hyb-right-red"></b><em id="em-jpstockcount" style="display: none;">0</em></span>
                                
                            </div>
                        </dd>
                        <dd id="shop-list" class="hyb-pcom-dd hyb-p-set">
                            <div class="hyb-p-dt">
                                配送信息：
                            </div>
                            <div class="hyb-p-dd">
                                
                                <div id="goods-ems" style="">
                                    <span showid="0-a" id="btn-ems" style="display: inline-block;" showhtml="海外直邮，发货后约3~10天到货" class="btn-stock curr" href="javascript:void(0);">
                                        <img id="img_tag" src="http://goods0.moximoxi.net/images/shipTips.jpg" title="日本EMS" showtap="EMS，发货后约3~10天到货" alt="日本EMS" class="Tips_tag_box">
                                        <em id="ems">海外直邮</em><b class="hyb-right-red"></b>
                                    </span>
                                    <span showid="2-a" id="btn-air" style="display: inline-block;" showhtml="经济航空运，发货后约7~20天到货" class="btn-stock" href="javascript:void(0);">
                                        <img id="img1" src="http://goods0.moximoxi.net/images/shipTips.jpg" title="经济航空运" showtap="推荐1.5kg以上的商品建议选用" alt="经济航空运" class="Tips_tag_box">
                                        <em id="air">经济航空运</em><b class="hyb-right-red"></b>
                                    </span>
                                    <span showid="3-a" id="btn-ship" style="display: inline-block;" showhtml="海外直邮，发货后约2~3月到货" class="btn-stock" href="javascript:void(0);">
                                        <em id="ship">海运</em><b class="hyb-right-red"></b>
                                    </span>
                                    <span showid="9-a" id="btn-dps" showhtml="特惠直邮（DPS），发货后约9~11天到货" class="btn-stock" href="javascript:void(0);" style="display: inline-block;">
                                        <em id="dps">特惠直邮</em><b class="hyb-right-red"></b>
                                    </span>
                                    <span showid="4-0" id="btn-yt" style="display: none;" showhtml="国内快递，发货后约2~3天到货" class="btn-stock" href="javascript:void(0);">
                                        <em id="Span3">圆通</em><b class="hyb-right-red"></b>
                                    </span>
                                    <span showid="4-1" id="btn-sf" style="display: none;" showhtml="国内快递，发货后约1~3天到货" class="btn-stock" href="javascript:void(0);">
                                        <em id="sf">顺丰</em><b class="hyb-right-red"></b>
                                    </span>
                                    <span showid="6-2-0" id="btn-CNems" style="display: none;" showhtml="国内保税区直发，发货后约3~4天到货" class="btn-stock" href="javascript:void(0);">
                                        <em id="Span1">中国邮政</em><b class="hyb-right-red"></b>
                                    </span>
                                    <span showid="6-4-0" id="btn-IsParcel" style="display: none;" showhtml="国内保税区直发，发货后约3~7天到货" class="btn-stock" href="javascript:void(0);"><em id="Span8">邮政小包</em><b class="hyb-right-red"></b></span>
                                    <span showid="6-2-1" id="btn-IsCNems" style="display: none;" showhtml="国内保税区直发，到货立即发货，以每次预售通知时间为准" class="btn-stock" href="javascript:void(0);"><em id="Span4">中国邮政</em><b class="hyb-right-red"></b></span>
                                    <span showid="6-1-1" id="btn-IsCNsf" style="display: none;" showhtml="国内保税区直发，到货立即发货，以每次预售通知时间为准" class="btn-stock" href="javascript:void(0);"><em id="Span5">顺丰</em><b class="hyb-right-red"></b></span>
                                </div>
                                <div class="shipping_tag">
                                </div>
                                <div id="goods-ship" style="display: none;">
                                    <b id="ship_tag" class="ship_tags">海外直邮海外直邮提示 </b>
                                </div>
                                <div id="goods-time">
                                    <a id="btn-time" href="javascript:void(0);">海外直邮，发货后约3~10天到货</a>
                                </div>
                            </div>
                        </dd>
                        <dd>
                            
                        </dd>
                        <dd class="hyb-pcom-dd" id="collectnew_goods_attr"></dd>
                        <dd class="hyb-pcom-dd hyb-p-total">
                            <div class="hyb-p-dt" id="tr_buycount">
                                数量信息：
                            </div>
                            <div class="hyb-p-dd">
                                <a href="javascript:void(0)" class="hyb-btn-reduce"></a>
                                <input id="input-buycount" type="text" class="hyb-total-txt" value="1" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" style="border: 1px solid rgb(51, 51, 51); height: 25px;">
                                <a href="javascript:void(0)" class="hyb-btn-add"></a>
                            </div>
                        </dd>
                        <dd class="hyb-pcom-dd">
                            <div class="hyb-p-dt">
                                销&nbsp;量&nbsp;：
                            </div>
                            311
                        </dd>
                        <dd class="hyb-pcom-dd hyb-p-btn">
                            <div id="div_201409301635" class="hyb-p-dd">
                                <a id="btn-buycart2" href="javascript:void(0)" class="btn-append" style="display: inline-block;">
                                    <img src="http://goods0.moximoxi.net/images/v1504/car-btn.png" align="">加入购物车</a> <a id="btn-buycart1" href="javascript:void(0)" class="btn-buy" style="display: inline-block;">立刻购买</a> <a id="btn-stocknotify" href="javascript:;" style="display: none;">到货通知</a>
                            </div>
                        </dd>
                        <div class="hyb-warp-share">
                            <div class="hyb-p-share">
                                
                                <a class="hyb-btn-praise goods-button-love" href="javascript:;"><b></b>赞（0）</a>
                                <a class="hyb-btn-praise goods-button-fav" href="javascript:;" onclick="MX.Goods.Collect('68147',0)">加入收藏</a> <a class="hyb-btn-share" href="javascript:;" style="position: relative;">优惠活动
                                        <div id="div201409261504" style="position: absolute; border-radius: 5px; display: none; text-align: center; left: -100px; top: 30px; width: 240px; padding: 15px; border: solid 5px #E98450; background: #fff;">
                                            <div style="line-height: 18px;">
                                                打开微信扫描二维码关注摩西，及时掌握最新优惠信息，还支持微信下单哦！
                                            </div>
                                            <img src="http://images.moximoxi.net/details/201405/1410035560.jpg" width="200" height="200">
                                            <div>
                                                摩西官方微信：moximoxishopping
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>
                        
                    </dl>
                    
                  `;
       console.log(html);
    
    $(".main").html(html);

    //数量
    $(".hyb-btn-reduce").click(function() {
        var num = $(this).next().val();
        num--;
        if(num <=1){
            num =1;
        }
        $(this).next().val(num);
    });
    $(".hyb-btn-add").click(function(){
        var num = $(this).prev().val();
        num ++;
        if(num >=10){
            num =10;
        }
        $(this).prev().val(num);
    })
    //点击购物车
    $("#btn-buycart2").click(function(){
        let id = $(".hyb-dinfo-box").attr("id");
        let num = $("#input-buycount").val();
        if (typeof num != "number" || num < 1) {
            num = 1;
        }
    //     console.log(id ,num);
        $.get({
            url:"../php/list.php",
            data:{
                "id":id,
            },
            success(res){
                let cookieId = myCookie.getItem("id");
                cookieId = JSON.parse(cookieId);
                cookieId.id = cookieId,id || [];
                if (cookieId.id.indexOf(id) == -1) {
                    cookieId.id.push(id);
                }
                let strId = JSON.stringify(cookieId);
                let cookieid1 = myCookie.getItem(id) || "{}";
            }
        })
    })
      
})