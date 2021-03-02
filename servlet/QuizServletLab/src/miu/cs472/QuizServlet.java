package miu.cs472;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class QuizServlet
 */
//@WebServlet("/quizServlet")
public class QuizServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private static String[] question = {
			"3, 1, 4, 1, 5 ", 
			"1, 1, 2, 3, 5 ", 
			"1, 4, 9, 16, 25 ",
			"2, 3, 5, 7, 11 ",
			"1, 2, 4, 8, 16 ", 
		};
	private static int[] answers = {9, 8, 36, 13, 32};
	
	private static int score = 0;
	private static int count = 0;
	
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public QuizServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setAttribute("score", score);

		try{
			request.setAttribute("flag1", "collapse");
			request.setAttribute("numbers", question[count]);
			
			String ans = request.getParameter("answer");
			if(ans != null) {
				if(Integer.parseInt(ans) == answers[count-1]) {
					score += 1;
					request.setAttribute("score", score);
				}
			}
			request.getRequestDispatcher("quiz-servlet.jsp").forward(request, response);
			count++;
			request.setAttribute("score", score);
		}
		catch(Exception e) {
			request.setAttribute("flag", "collapse");
			request.setAttribute("flag1", "visible");
			request.setAttribute("count", count);
			request.getRequestDispatcher("quiz-servlet.jsp").forward(request, response);
		}
		
	}
}
