<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="ckeditor" uri="http://ckeditor.com"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>first use of CKEditor</title>
		<link type="text/css" rel="stylesheet" href="ckeditor/contents.css" mce_href="ckeditor/contents.css" />
	</head>
	<body>
		<textarea cols="10" id="editor1" name="editor1" rows="10"></textarea>
		<ckeditor:replace replace="editor1" basePath="ckeditor/"></ckeditor:replace>
	</body>
</html>