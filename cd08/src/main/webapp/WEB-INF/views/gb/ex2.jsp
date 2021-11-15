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
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/ejs/ejs.js"></script>
<script>
// 여러 리스트를 자기고 오기위한 템플릿
var startNo;
var listEJS = new EJS({
	url:'${pageContext.request.contextPath}/ejs/list-temlate.ejs'
});

var fatch = function() {
	$.ajax({
		url:'${pageContext.request.contextPath}/api/gb/list' + (startNo ? ('?sn='+startNo) : ''),
		dataType:'json',
		type:'get',
		success: function(response) {
			console.log(response);
			
			// 템플릿 안에서 response의 속성들에 접근할수 있따
			var html = listEJS.render(response);
			$("#list-guestbook").append(html);
			
			
			startNo = $("#list-guestbook").last().data('no') || 0;
			console.log(startNo);
			//console.log(response.date.length-1);
		}
		
		
	})
};

$(function(){
	// ..
	// ..
	
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
	</div>
</body>
</html>