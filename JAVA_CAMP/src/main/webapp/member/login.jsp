<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String mem_nick = null;
	Cookie cooks[] = request.getCookies();
	if(cooks !=null && cooks.length>0){
		for(int i=0;i<cooks.length;i++){
			if("mem_nick".equals(cooks[i].getName())){
				mem_nick = cooks[i].getValue();
			}
		}
	}
	
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인 실습 - 쿠키활용</title>
    <link rel="stylesheet" type="text/css" href="../themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="../themes/icon.css">
    <link rel="stylesheet" type="text/css" href="../demo/demo.css">
    <script type="text/javascript" src="../js/jquery.min.js"></script>
    <script type="text/javascript" src="../js/jquery.easyui.min.js"></script>
    <script type="text/javascript">
    	function loginAction(){
    		//alert("로그인 호출");
    		$("#f_login").attr("method","get");	
    		$("#f_login").attr("action","/member/login");
    		$("#f_login").submit();
    	}
    	//쿠키값 삭제하기 처리
    	function logoutAction(){
    		alert("로그아웃 호출");
    		location.href = "./logoutCookie.jsp"
    	}
    </script>
</head>
<body>
    <h2>Custom TextBox</h2>
    <p>This example shows how to custom a login form.</p>
    <div style="margin:20px 0;"></div>
    <div class="easyui-panel" title="Login to system" style="width:100%;max-width:400px;padding:30px 60px;">
<%
	//쿠키값이 널일 때 - 로그인을 하지 않았을 때
	if(mem_nick == null){
%>    	
    	<form id="f_login">
        <div style="margin-bottom:10px">
            <input class="easyui-textbox" name="MEM_ID" style="width:100%;height:40px;padding:12px" data-options="prompt:'ID',iconCls:'icon-man',iconWidth:38">
        </div>
        <div style="margin-bottom:20px">
            <input class="easyui-textbox" name="MEM_PW" type="password" style="width:100%;height:40px;padding:12px" data-options="prompt:'Password',iconCls:'icon-lock',iconWidth:38">
        </div>
        <div style="margin-bottom:20px">
            <input type="checkbox" checked="checked">
            <span>Remember me</span>
        </div>
        <div>
            <a href="javascript:loginAction()" class="easyui-linkbutton" data-options="iconCls:'icon-ok'" style="padding:5px 0px;width:100%;">
                <span style="font-size:14px;">Login</span>
            </a>
        </div>
        </form>
<%
	}
	//쿠키값이 존재할 때 - 로그인을 했을때 
	else{
%>        
        <div style="margin-bottom:10px">
  			<%=mem_nick %>님 환영합니다.
        </div>
        <div>
            <a href="javascript:logoutAction()" class="easyui-linkbutton" data-options="iconCls:'icon-cancel'" style="padding:5px 0px;width:100%;">
                <span style="font-size:14px;">Logout</span>
            </a>
        </div>    
<%
	}
%>        
    </div>
</body>
</html>