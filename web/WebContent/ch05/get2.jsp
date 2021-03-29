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
	
	<table border="1">
            <tr>
                <td>이름</td>
                <td><%=name %></td>
            </tr>
            <tr>
                <td>성별</td>
                <td>
                    <%=sex %>
                </td>
            </tr>
            <tr>
                <td>학년</td>
                <td>
                    <%=year %>
                </td>
            </tr>
            <tr>
                <td>관심분야</td>
                <td>
                    <%
						String[] majors = request.getParameterValues("major");
						for(int i=0; i<majors.length; i++) {
							String str = majors[i];
					%>
						<%=str %>&nbsp;
					<%
						}
					%>
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