define(function (require,exports,module){
	exports.init = function(){
		$("#activeBtn").on('touchend',function(){
			$("#keybordBox").slideDown()
		});
		$("#keybordBox .box").on('touchstart',function(e){
			$(e.currentTarget).css({
				'transform': 'scale(.9)',
				'-webkit-transform': 'scale(.9)',
				'-moz-transform': 'scale(.9)',
				'-ms-transform': 'scale(.9)',
				'-o-transform': 'scale(.9)'
			});  
		})
		.on('touchend',function(e){
			$(e.currentTarget).css({
				'transform': 'scale(1)',
				'-webkit-transform': 'scale(1)',
				'-moz-transform': 'scale(1)',
				'-ms-transform': 'scale(1)',
				'-o-transform': 'scale(1)'
			});   
			var T = $(e.currentTarget),Input = $("#activeBtn"),
			InVal = Input.data("value"),InTxt = Input.html();
			if( T.data("type") == "sure" ){
				$("#keybordBox").slideUp();
			}else if( T.data("type") == "del"){
				var InValDel = InVal.substring(0,InVal.length-1),
				InTxtDel = InTxt.substring(0,InTxt.length-1);
				Input.html(InTxtDel).data("value",InValDel);
				if( InValDel == "" ){
					// Input.html("请输入密码")
				}
			}else if( T.data("type") == "num" ){
				if( InVal.length < 6 ){
					if(InVal.length == 0){
						InTxt = "";
					}
					Input.html( InTxt + T.data("value") ).data("value", InVal + T.data("value"));
					setTimeout(function(){
						var setTval = $("#activeBtn").html()
						Input.html( setTval.replace(/\d/g,"●") )
					},201)
				}
			}
		});
		
		$("#pwdBtn").on('change',function(){
			var Input = $(this),
			InVal = Input.data("value") , InTxt = Input.val();
			if( InVal.length <= InTxt.length ){
				if( InVal.length < 6 ){
					if(InVal.length == 0){
						InTxt = "";
					}
					Input.val( InTxt + Input.data("value") ).data("value", InVal + Input.data("value"));
					setTimeout(function(){
						var setTval = $("#pwdBtn").val()
						Input.val( setTval.replace(/\d/g,"●") )
					},201)
				}else{
					alert( InVal + ";" + InTxt );
				}
			}else if( InVal.length > InTxt.length ){
				var InValDel = InVal.substring(0,InVal.length-1),
				InTxtDel = InTxt.substring(0,InTxt.length-1);
				Input.val(InTxtDel).data("value",InValDel);
				if( InValDel == "" ){
					// Input.html("请输入密码")
				}
			}



			// if( T.data("type") == "del"){
			// 	var InValDel = InVal.substring(0,InVal.length-1),
			// 	InTxtDel = InTxt.substring(0,InTxt.length-1);
			// 	Input.val(InTxtDel).data("value",InValDel);
			// 	if( InValDel == "" ){
			// 		// Input.html("请输入密码")
			// 	}
			// }else if( T.data("type") == "num" ){
			// 	if( InVal.length < 6 ){
			// 		if(InVal.length == 0){
			// 			InTxt = "";
			// 		}
			// 		Input.val( InTxt + T.data("value") ).data("value", InVal + T.data("value"));
			// 		setTimeout(function(){
			// 			var setTval = $("#activeBtn").val()
			// 			Input.val( setTval.replace(/\d/g,"●") )
			// 		},201)
			// 	}
			// }
		});

	
	}
})