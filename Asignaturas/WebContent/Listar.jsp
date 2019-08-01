<!DOCTYPE html>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList" %>
<%@page import="java.util.List"%>
<%@page import="Modelo.Asignaturas"%>
<%@page import="ModeloDAO.AsignaturasDAO"%>
<%@page import="java.sql.*" %>


<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <div>Materias</div>
       <!-- <div className="tables">-->
      <table>
              <thead>
                <tr>
                  <td colspan="9">
                    <strong>Verano</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Asignatura</strong>
                  </td>
                  <td colspan="2">
                    <strong>Horas de clase</strong>
                  </td>
                  <td colspan="2">
                    <strong>Horas de lab.</strong>
                  </td>
                  <td colspan="2">
                    <strong>Créditos</strong>
                  </td>                  
                </tr>
                </thead>
                <tbody>             
                <% AsignaturasDAO daov=new AsignaturasDAO();
                   List<Asignaturas>listv=daov.Listarv();
                   Iterator<Asignaturas>iterv=listv.iterator();
                   Asignaturas asigv=null;
                   while(iterv.hasNext()){
                   asigv=iterv.next();
                  
                %>
                 <tr>
                  <td colspan="3"><%=asigv.getAsignatura()  %></td>
                  <td colspan="2"><%=asigv.getH_clase()%></td>
                  <td colspan="2"><%=asigv.getH_lab()  %></td>
                  <td colspan="2"><%=asigv.getCr()%></td>
                </tr>
                <%}%>
              </tbody>
            </table>
            
            <table>
              <thead>
                <tr>
                  <td colspan="9">
                    <strong>Primer Semestre</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Asignatura</strong>
                  </td>
                  <td colspan="2">
                    <strong>Horas de clase</strong>
                  </td>
                  <td colspan="2">
                    <strong>Horas de lab.</strong>
                  </td>
                  <td colspan="2">
                    <strong>Créditos</strong>
                  </td>                  
                </tr>
                </thead>
                <tbody>             
                <% AsignaturasDAO dao=new AsignaturasDAO();
                   List<Asignaturas>list=dao.Listar();
                   Iterator<Asignaturas>iter=list.iterator();
                   Asignaturas asig=null;
                   while(iter.hasNext()){
                   asig=iter.next();
                  
                %>
                 <tr>
                  <td colspan="3"><%=asig.getAsignatura()  %></td>
                  <td colspan="2"><%=asig.getH_clase()%></td>
                  <td colspan="2"><%=asig.getH_lab()  %></td>
                  <td colspan="2"><%=asig.getCr()%></td>
                </tr>
                <%}%>
              </tbody>
            </table>
        
        <table>
              <thead>
                <tr>
                  <td colspan="9">
                    <strong>Segundo Semestre</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Asignatura</strong>
                  </td>
                  <td colspan="2">
                    <strong>Horas de clase</strong>
                  </td>
                  <td colspan="2">
                    <strong>Horas de lab.</strong>
                  </td>
                  <td colspan="2">
                    <strong>Créditos</strong>
                  </td>                  
                </tr>
                </thead>
                <tbody>             
                <% AsignaturasDAO dao2=new AsignaturasDAO();
                   List<Asignaturas>list2=dao2.Listar2();
                   Iterator<Asignaturas>iter2=list2.iterator();
                   Asignaturas asig2=null;
                   while(iter2.hasNext()){
                   asig2=iter2.next();
                  
                %>
                 <tr>
                  <td colspan="3"><%=asig2.getAsignatura()  %></td>
                  <td colspan="2"><%=asig2.getH_clase()%></td>
                  <td colspan="2"><%=asig2.getH_lab()  %></td>
                  <td colspan="2"><%=asig2.getCr()%></td>
                </tr>
                <%}%>
              </tbody>
            </table>
    </body>
</html>
