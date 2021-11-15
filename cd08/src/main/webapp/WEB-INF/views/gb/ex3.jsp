<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/ejs/ejs.js"></script>
<script>
// 여러 리스트를 자기고 오기위한 템플릿
var listEJS = new EJS({
	url:'${pageContext.request.contextPath}/ejs/list-temlate.ejs'
});

var startNo;

var fatch = function() {
	var url = '${pageContext.request.contextPath}/api/gb/list' + (startNo ? ('?sn='+startNo) : '')
	$.ajax({
		url: url,
		dataType:'json',
		type:'get',
		success: function(response) {
			console.log(response);
			
			// 템플릿 안에서 response의 속성들에 접근할수 있따
			var html = listEJS.render(response);
			$("#list-guestbook").append(html);
			
			startNo = $("#list-guestbook li").last().data('no') || 0;
			console.log(startNo);
			//console.log(response.date.length-1);
		}
		
		
	})
};

$(function(){
	// 삭제 다이알로그 객체 만들기
	var dialogDelete = $('#dialog-delete-form').dialog({
		autoOpen: false, // 바로 안뜨게 만들기
		modal:true,
		buttons: {
			"삭제": function() {
				// 삭제 ajax 실행
				var no = $('#hidden-no').val();
				var password = $('#password-delete').val(); 
				// 때ㅔ려야될 url
				var url = '${pageContext.request.contextPath}/api/gb/delete/' + no;
				
				$.ajax({
					url: url,
					type: 'post',
					dataType:'json',
					data: 'password=' + password,
					success: function(response) {
						console.log(response)
					
						if(response.data == -1){
							$('.validateTips.error').show();
							$('#password-delete').val('').focus();
							return;
						}
						$('#list-guestbook li[data-no=' + response.data + ']').remove();
						dialogDelete.dialog('close');
					}
						
				});
			},
			"취소": function() {
				$(this).dialog("close");
			}
		}
	});
	
	// 글삭제 버튼
	$(document).on('click', '#list-guestbook li a',function(event) {
		event.preventDefault();
		
		var no = $(this).data('no');
		console.log(no);
		$("#hidden-no").val(no)
		
		dialogDelete.dialog('open');
	});
	
	// 최초 리스트 가져오기
	fatch();
});
</script>
</head>
<body>
	<div id="guestbook">
		<h1>방명록</h1>
		<form id="add-form" action="" method="post">
			<input type="text" id="input-name" placeholder="이름">
			<input type="password" id="input-password" placeholder="비밀번호">
			<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
			<input type="submit" value="보내기" />
		</form>
		<ul id="list-guestbook"></ul>
		<div id="dialog-delete-form" title="메세지 삭제" style="display: none">
			<p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
			<p class="validateTips error" style="display: none">비밀번호가 틀립니다.</p>
			<form>
				<input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all"> 
				<input type="hidden" id="hidden-no" value=""> 
				<input type="submit" tabindex="-1" style="position: absolute; top: -1000px">
			</form>
		</div>
	</div>
</body>
</html>