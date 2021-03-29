<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String name = request.getParameter("name");
		String major = request.getParameter("major");
	%>
	<h3>이름: <%=name %></h3>
	<h3>학과: <%=major %></h3>
</body>
</html>