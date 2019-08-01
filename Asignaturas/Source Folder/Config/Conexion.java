
package Config;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    Connection conn;
    public Conexion(){
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/materias","root","");
        }catch(ClassNotFoundException | SQLException e){
        System.err.println("Error..."+e);
        }
    }
    public Connection getConnection(){
    return conn;
    }
                                        
            
}
