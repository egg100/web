<%@page import="boardPkg.BoardDAO"%>
<%@page import="boardPkg.Board"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String bno = request.getParameter("boardNo");
	String til = request.getParameter("title");
	String cnt = request.getParameter("content");
	if(cnt != null) {
		cnt.trim();
	}
	String wrt = request.getParameter("writer");
	String del = request.getParameter("del");
	
	int boardNo = Integer.parseInt(bno);
	
	Board board = new Board();
	BoardDAO dao = new BoardDAO();
	board.setBoardNo(boardNo);
	board.setTitle(til);
	board.setContent(cnt);
	board.setWriter(wrt);
	
	if(del.equals("t")){
		dao.deleteBoard(board);
	} else {
		//dao.insertBoard(board);
		Board retVal = new Board();
		retVal = dao.insertBoardResult(board);
		
		// {"name":"Hong", "age": 10} json
		String result = "{\"boardNo\":\""+retVal.getBoardNo()+"\","
			+ "\"title\":\""+retVal.getTitle()+"\","
			+ "\"content\":\""+retVal.getContent()+"\","
			+ "\"creationDate\":\""+retVal.getCreationDate()+"\","
			+ "\"writer\":\""+retVal.getWriter()+"\"}";
		out.print(result);
	// {"boardNo":"1","title":"test","content":"test","writer":"user1"}
	}
%>
