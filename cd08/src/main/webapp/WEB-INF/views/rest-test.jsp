<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js"></script>
<script>
$(function(){
	vo = {
		name: "승현",
		password: "1234",
		message: "반가워요"
	};
	
	$("button").click(function() {
		$.ajax({
			url: "${pageContext.request.contextPath}/api/test",
			async: true,
			type: 'post',		// 요청 메소드
			dateType: 'json', 	// 받을 데이터 포멧
			contentType: 'application/json', // 보내는 데이터 포멧
			data: JSON.stringify(vo),	// 파라미터 타입
			success: function(response) {
				console.log(response)
				var html = "";
				html += ("<h2>" + response.data.no + "</h2>");
				html += ("<h3>" + response.data.name + "</h3>");
				html += ("<h4>" + response.data.message + "</h4>");
				
				$("#data").append(html);
			}
		})
	});
});
</script>
</head>
<body>
	<h1>AJAX Test - Restful API</h1>
	<br/><br/>
	<button id='create'>Create(post)</button>
	<br/><br/>
	<button id='read'>Read(get)</button>
	<br/><br/>
	<button id='update'>update(put)</button>
	<br/><br/>
	<button id='delete'>delete(delete)</button>
</body>
</html>