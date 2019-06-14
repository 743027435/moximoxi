$(function(){
    function plase(){
        $(".select-list").innerHTML = "";
        $.get({
            url:"../php/list.php",
            // data: "name=zsss&age=123",
            success(res){
                let result = JSON.parse(res);
                let html = "";
                $.each(result,function(i ,ele){
                    html += ` <li class="sel-shop-iteam " style="">
                                        <div style="position: absolute; top: 0px;">   
                                        </div>
                                        <div class="s-pic">
                                            <a  target="_blank" >
                                                <img src="${ele.src}"  style="width: 158px; height: 158px;">&nbsp;</a>
                                        </div>
                                        <div class="cart-price" protype="0" proid="68147">
                                            <strong class="price" title="RMB:${ele.sales}元" style="">
                                                ${ele.sales}元人民币</strong> <strong class="price" style="color: #f00;
                                                    line-height: 16px;">
                                                    / ${ele.zhe}折</strong>

                                                    
                                            <input type="button" value="免费试用" style="cursor:pointer;display:none" onclick="FreeProduct(68147,0)" protype="0" proid="68147" class="FreeTrial">
                                        </div>
                                        <em class="s-dec"><a target="_blank" >
                                            ${ele.title}
                                            </a> </em>
                                        
                                    </li>`;            
                                    // console.log(html);
                });
            
            $(".select-list").append(html);
            }
            // success(responseText) {
            //             console.log("成功-", responseText);
            //         },
            //         error(xhr) {
            //             console.log("失败-", xhr.statusText);
            //         }
        })
    }
    plase();


    //跳到详情页
     let olist = $(".select-list");
     olist.on("click",".sel-shop-iteam",function(){
        let index = $(this).index()-1;
        console.log(index);
        $.get({
            url:"../php/list.php",
            success(res){
                let datalist = JSON.parse(res);
                let listindex = datalist[index];
                var res = "";
                for(var key in listindex){
                    res += key + "=" + listindex[key] +"&";
                }
                res = res.slice(0 ,-1);
                console.log(res);
                window.location.href = "../tpl/details.html?"+res;
            }
        })
     })






})