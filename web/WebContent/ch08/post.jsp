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
	request.setCharacterEncoding("UTF-8");
	String email = request.getParameter("email") + "@" + request.getParameter("email2");
	String psw = request.getParameter("psw");
	String name = request.getParameter("name");
	String year = request.getParameter("year");
	String month = request.getParameter("month");
	String day = request.getParameter("day");
	String sex = request.getParameter("sex");	
%>
	<table border="1">
	    <tr>
	        <td>이메일</td>
	        <td><%=email %></td>
	    </tr>
	    <tr>
	        <td>비밀번호</td>
	        <td>
	            <%=psw %>
	        </td>
	    </tr>
	    <tr>
	        <td>이름</td>
	        <td>
				<%=name %>
	        </td>
	    </tr>
	    <tr>
	        <td>생년월일</td>
	        <td>
				<%=year %>/<%=month %>/<%=day %>
	        </td>
	    </tr>
	    <tr>
	        <td>성별</td>
	        <td>
	            <%=sex %>
	        </td>
	    </tr>
	    <tr>
	        <td>취미</td>
	        <td>
	            <%
	String[] hobbys = request.getParameterValues("hobby");
	for(int i=0; i<hobbys.length; i++) {
		String str = hobbys[i];
	%>
	<%=str %>&nbsp;
	<%
	}
	
	%>
	        </td>
	    </tr>
	</table>
</body>
</html>