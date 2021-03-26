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
		String sex = request.getParameter("sex");
		String year = request.getParameter("year");
	%>
	이름: <%=name %> <br>
	성별: <%=sex %> <br>
	학년: <%=year %> <br>
	<ul>
	<%
		String[] majors = request.getParameterValues("major");
		for(int i=0; i<majors.length; i++) {
			String str = majors[i];
	%>
		<li><%=str %></li>
	<%
		}
	%>
	</ul>
	<ul>
	<%
		String[] hobbys = request.getParameterValues("hobby");
		for(int i=0; i<hobbys.length; i++) {
			String str = hobbys[i];
	%>
		<li><%=str %></li>
	<%
		}
		
	%>
	</ul>
</body>
</html>