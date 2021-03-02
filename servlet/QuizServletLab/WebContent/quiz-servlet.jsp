<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>The Number Quiz</title>
</head>
<body style="border: 2px solid blue; width: 300px">
	<form action="quizServlet" method="get">
		<h1>The Number Quiz</h1>
		<table>	
			<tr><td>Your Current Score is ${score}</td></tr>
			<tr style="visibility: ${flag}">
				<td>Guess the next number in sequence.
				<br>${numbers}
				<br>Your Answer: <input name="answer"></input>
				<input type='submit' value='Submit' /></td>
			</tr>
			<tr style="visibility: ${flag1}">
				<td> You Scored ${score} out of ${count}</td> 
			</tr>
		</table>
	</form> 
</body>
</html>