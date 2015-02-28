define(function (require, exports, module) {
    var headImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMUU5QUVGOTg4MzUxMUU0OTcxM0U4NzdGNjI5NDNGQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMUU5QUVGQTg4MzUxMUU0OTcxM0U4NzdGNjI5NDNGQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMxRTlBRUY3ODgzNTExRTQ5NzEzRTg3N0Y2Mjk0M0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMxRTlBRUY4ODgzNTExRTQ5NzEzRTg3N0Y2Mjk0M0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EHLJEgAAB7BJREFUeNqsWVlsVFUY/u+drbO0nc60BSnQCrKIimA0iiBIYpSQaDTGBXEJPvpGjBr1UeOTmmjwwfhifNEYFklZRC2agCCBphRaKHYvFKad6Tb7Pn7/mXvHmem9t+tJvjDM3HvOd/7zL99/KgXDSZrnWAE8CWwHHgQaAQ9gAoLAbaALOAP8CVyezyLSHAnagGeAV4FtwHKeYxbvTQBtwBHgEHBnsQkyiT3Au8BDug9J6qM5yuV05xoFvgO+AvyLQXAD8AWwS+tHk0kmM5AFo2wmx9RIliUyyfnv0uksyGqy7QU+An5eCMFXgANAbfkPTMJsNtHYeJh6+kfotm+SQuEYZUDSXmGlWo+LVjXV0coGL5nMMqVSGb012JLvA8m5EtyvWG6ajzGxRCJFZy90U3vHEIUicfGQJOcfZYPlsjnxXOMKLz25dT01LvdSMpXWO/pfgDeB0GwJMrkvtX6wYFEmdPjYJeod8JPNahbW1BpMJgVSNpuFdj+1kTbdv5ISybSeQU4ALwHRkpPSeJAf+lzP32LxJB1svkj9gwEcpUWXnBo0Vmwgnc5Q86nLdLVrWGxIZ+xW3ImMCK4DvtUizoux47ecuU4DIGezmWcM/QyOOZPJio1xwPzacoX8YyEcvaz3yj7gHT2CnGC/Bmq03mR/GrgZoPbOoRnJMZkkjtJdZac6b6UIEI70YChO5y72kCzJRq9/BqzVIshH+7T+cUnU0XWLUsmM+Kzlb2ytJH63ms30wL0NtHPbOtrx+Jp8gIAwW66710cTkxFhVZ1RDXxSMExRhfhQ7w32s3g8RTeHx/EZFsrmCpYSOS6XDx5PjZNWLKuhFQ0ecjltIgfyXrY8soo8Hidd//cOyEVp2DdBNXiWN6QzXgQeBS6oBNlyG40KCVtAxmp2u00QZkLs8C5XBXncDvJiwapKO76XKY2F1bzH/CUpRxvWLBXku7p9SFHpmdzXpPjiBTXN/KjUV9KLXibYPzgiIjJvVVn4pcmUP262ajabNSpxYmPsHu5qF9XVVgkL5vRfGAfuMysF/wkj35uYCNNUKCo+Wy1mUqfMZDKARJKBXGDiairKu0aOpoIRkR89NS6y8HzaJFkZ7ZQVybRMb8fRWIJG/JMi//FEqt8xHA4bjtlkaLFKuIBctgM+/vHJMMpkyHBzKsEd+pJJEkfKpGSNme5pqqf6uipNZ2drOeGva1cvoQokdDWw1JzK5FOY28glMDbxEW/W+5Wt5ISVHBU2YcHyqtHdN4JknNVMGfxsBNa/0ePDu6mSd3leOAZVVzkFWQOSyzlIRvCh3sgH2UKTU2Eahy+WJ2RJeUavFjOZUnJEDjvUjrcKlrUaBQmPiKw4IxlZkaPVXe2cZkE+drae1hr8ndCFZdYVp+KsEJiBHA+7rOQcmolksQ8Vf7+yKCmXR+6qxlpEvWkaEb35NONMaXDmPfxjYUGyzusqHLXTYaU1d9dTOJKgOHSjJEnznT5uVhqY6nl1XFg4GI5T/1CAli11i1InKges5x8PC7VtJMdmMcJM8Dqwfr4zmDhXIsJ7+keRdE0iKvm4WWqZFkZOHJCs9K0LGhwsbKl8Dc4WiC/CuCYrTXVwMWaTCq3noo2zTPCq0lQbhhIvLNrKXG5BK6qCQggH40dZxfzBBDNKt687zFAsTruFlqCscXGfQYXoyn+hANxOSDMHcWsiGbvBeaBTlVtLgA7t/hdq1iLn6yekOtdPFp0BRCiXP15ENqgkWVEKOdFD/qNXZoEhbh5AOIUTSaV1N/oay8DitvNT4ONplzFQKxazVBAEkhoQgmhMpJIIE1XqbzExFrVuiFlu4h1c1uj/BK3OE4lp9srtwGOcB4sJeoFLQFNxwY+h4FthQVbLxUerLsDfTQVjwqKcmPl3dgNW2AxWMuWVg0snv8dJ3uWyaxF8DmjWaty5Fzio/ofL1D+tfdTT56MtD6+m9ZDtqvVKpZMsrjyC4ZjQelWVFVRhy0usYl/ld/nZAIidv9QL8RGlZ3dtFl1i0QZ+AN7S64sPKXclwkIpJFwWldFYkk6f7aLm39rJNzolLCDLckk3x3mP1TZfifDdTKm181Zj8rzhIyfaaPDWmPDhialIYS4lo+yf6WbhA+AoT8qLhaMJ4UtszVvDE3T0ZDt6215xhcGLqnWWg6Wz6za1YCP8m+qP3A9zkPQN+unw8Ta62DYg/JM3w1oyCPdQ5vABe5VexJBgAngDLx1PYsfpVKaQfLmUcQS2tg/S4WOtdKN3REQwEw2hJnNbGQzGBVG1qRpHxJ863UknWzpgrajoBAviAQbmzUj529gXFAuWpjidEOdbppdxRAeAfeUCgRfhW4Lf/7omVDX75w20k+FIXPzW0TVMq5vqYLUANjMARZMWJ6AzrgCva5EzIkjKLdPbQKvS6dcUy3OTODqiwaExGhkNCn+zKhdDsVhK+FkE7sH3OeXkiub5HngPCOhWsVkUgW8w4zZE2U/RWCpTru342DmqOYqLCfBNhEUEk1RifRYUONZWfH5euSwKGJbZ2aoK9B97ksnMdmXX/vJjLy8mGjowDrRgo3uRHbZyIM5mYfOc1IpE5/AP4y6ln96p/AmiAXBzD6GImoTixwGlhP4NnFb9bC6C5z8BBgDSuqxD+xOAPAAAAABJRU5ErkJggg==';
    var userlist = {
        datas: [],
        pages: 0,
        page: 0,
        per: 10
    };
    function getUserList() { //调用接口查询排行榜数据
        $.ajax({
            url: '/gitblog/json/op_health_share_rank_info.json',
            xhrFields: {
                withCredentials: true
            },
            dataType: 'json',
            type: 'get',
            contentType: "application/json;charset=UTF-8",
            data: '{}'
        }).done(function(response) {
            if (response.resultCode === successCode) {
                userlist.datas = response.infos;
                userlist.pages = Math.ceil(userlist.datas.length / userlist.per);
                if (userlist.pages <= 0) {
                    $("#loadingId").html("无可加载数据");
                } else {
                    reflashPage(0);
                }
            } else {
                dialog.alert(response.resultMsg);
            }
        }).fail(function(response) {
            dialog.alert();
        });
    }

    function reflashPage(page, callback) { //渲染排行榜分页
        if (userlist.pages <= page) {
            $("#loadingId").html("加载完毕");
            return;
        }
        var $box = $("#user-list");
        var _html = '';
        if (userlist.datas.length > 0) {
            for (var i = page * userlist.per; i < userlist.datas.length && i < (page + 1) * userlist.per; i++) {
                var _obj = userlist.datas[i],
                    headMaoZi = i == 0 ? '<div class="li-theone"></div>' : '',
                    nameOrPhone = _obj.realName ? _obj.custName : _obj.phone,
                    headImg2 = !_obj.custAvatar ? headImg : _obj.custAvatar;
                _html += '<li><div class="li-num">' + (i + 1) + '</div><div class="li-headImg">' + headMaoZi + '<img src="' + headImg2 + '"/></div><div class="li-tel">' + nameOrPhone + '</div><div class="li-right">' + _obj.amount + '人</div></li>';
            }
            $box.append(_html);
            userlist.page = page + 1;
            if (userlist.pages <= userlist.page) {
                $("#loadingId").html("加载完毕");
            } else {
                $("#loadingId").html("查看更多排行");
            }
            if (callback) {
                callback();
            }
        }
    }

    function initIscroll() { //iscroll插件
        var scrollFn = {
            myScroll: null,
            init: function() {
                var T = this;
                this.myScroll = new iScroll("wrapper", {
                    myscroll: false,
                    vScrollbar: true,
                    bounce: true,
                    fixedScrollbar: false,
                    checkDOMChanges: true,
                    useTransform: false,
                    hideScrollbar: true,
                    onScrollMove: function() {},
                    onScrollEnd: function() {
                        if ((T.myScroll.y - T.myScroll.maxScrollY) < 10) {
                            if (userlist.pages <= 0) {
                                return;
                            } else {
                                reflashPage(userlist.page, function() {
                                    T.myScroll.refresh();
                                });
                            }
                        }
                    }
                })
            }
        };
        scrollFn.init();

        document.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, false);
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(scrollFn.init(), 200);
        }, false);
    }

    function getUserInfo() {
        var url = '/gitblog/json/op_health_userInfo.json',
            data = {};
        $.ajax({
                url: url,
                xhrFields: {
                    withCredentials: true
                },
                data: JSON.stringify(data),
                contentType: "application/json;charset=UTF-8",
                type: 'get',
                dataType: "json"
            })
            .done(function(data) {
                if (data.resultCode == successCode) {
                    var headImg3 = !data.avatar ? headImg : data.avatar;
                    $("#img-head").attr("src",headImg3);
                    if( data.rankNo && data.rankNo > 50 ){
                        $("#hh-rankNo").html("第"+data.rankNo+"名");
                    }
                    if( data.givePersCount && data.givePersCount > 0 ){
                        $("#hh-rankWord").html("呵护人数越多，排名越高");
                        $("#hh-counts").html(data.givePersCount);
                        $("#user-phb").css("opacity",1);
                    }
                } else {
                    Dialog.alert(data.resultMsg);
                }
            })
            .fail(function() {
                Dialog.alert();
            });
    }
    exports.init = function(){
        initIscroll();
        getUserInfo();
        getUserList();
    };
})