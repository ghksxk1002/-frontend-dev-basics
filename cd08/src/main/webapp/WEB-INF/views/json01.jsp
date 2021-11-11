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
	$("button").click(function() {
		$.ajax({
			url: "${pageContext.request.contextPath}/api/json",
			async: true,
			type: 'get',
			dateType: 'json', // 받는 데이터 타입
			//contentType: // 바디 데이터 형식
			//data:			// 바디데이터 타입
			success: function(response) {
				// console.log(response)
				var html = "";
				html += ("<h2>"+response.data.no+"</h2>");
				html += ("<h3>"+response.data.name+"</h3>");
				html += ("<h4>"+response.data.message+"</h4>");
				
				$("#data").append(html);
			}
		})
	});
});
</script>
</head>
<body>
	<h1>AJAX Test - JSon Format Date 택스트로 오는 데이터다</h1>
	
	<button>데이터 가져오기</button>
	<p id="data">변경전</p>
</body>
</html>