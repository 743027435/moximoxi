$(function(){
    function plase2(){
        $(".inhotProCategorySales").innerHTML = "1213";
        $.get({
            url:"../php/list-left.php",
            // data: "name=zsss&age=123",
            
            success(res){
                let result = JSON.parse(res);
                let html = "";
                // console.log(res);
                $.each(result,function(i ,ele){
                    html +=`<li class="inhotProCategorySales1">
                                <a ><img src="${ele.src}"  >
                                </a>
                                <a class="depict" >${ele.title}
                                </a>
                                <span class="price ">${ele.sales}</span>
                            </li>  `;
                            });
                 $(".inhotProCategorySales").append(html);
             }
    })
    }
    plase2();
})