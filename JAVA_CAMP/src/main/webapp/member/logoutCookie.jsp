<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	Cookie cook = new Cookie("mem_nick","");
	cook.setMaxAge(0);
	cook.setPath("/");
	response.addCookie(cook);
	response.sendRedirect("login.jsp");
 %>