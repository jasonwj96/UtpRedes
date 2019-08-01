package ModeloDAO;
import Config.Conexion;
import Interfaces.Crud;
import java.sql.Connection;
import java.sql.ResultSet;
import Modelo.Asignaturas;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.sql.PreparedStatement;

public class AsignaturasDAO implements Crud{
    Conexion cn= new Conexion();
    Connection con;
    PreparedStatement ps;
    ResultSet rset;
    Asignaturas a=new Asignaturas();
    
    @Override
    public List<Asignaturas> Listarv() {
        ArrayList<Asignaturas>listv=new ArrayList<Asignaturas>();
        String sql="SELECT *FROM asignaturas WHERE Año=1 AND Semestre='Verano'";
        try{
        con=cn.getConnection();
        ps=con.prepareStatement(sql);
        rset=ps.executeQuery();
        while(rset.next()){
        Asignaturas asig=new Asignaturas();
        asig.setNum_asig(rset.getInt("Num_Asig"));
        asig.setAge(rset.getInt("Año"));
        asig.setSemestre(rset.getString("Semestre"));
        asig.setAsignatura(rset.getString("Asignatura"));
        asig.setH_clase(rset.getInt("Horas_de_clase"));
        asig.setH_lab(rset.getInt("Horas_de_Lab"));
        asig.setCr(rset.getInt("Creditos"));
        asig.setDescr(rset.getString("Descripcion"));
        listv.add(asig);
        
        }
            rset.close();
            ps.close();
            con.close();
        }catch(SQLException e){
            System.err.println("Error..."+e);
        }
        return listv;
    }
    
    @Override
    public List<Asignaturas> Listar() {
        ArrayList<Asignaturas>list=new ArrayList<Asignaturas>();
        String sql="SELECT *FROM asignaturas WHERE Año=1 AND Semestre='Primer Semestre'";
        try{
        con=cn.getConnection();
        ps=con.prepareStatement(sql);
        rset=ps.executeQuery();
        while(rset.next()){
        Asignaturas asig=new Asignaturas();
        asig.setNum_asig(rset.getInt("Num_Asig"));
        asig.setAge(rset.getInt("Año"));
        asig.setSemestre(rset.getString("Semestre"));
        asig.setAsignatura(rset.getString("Asignatura"));
        asig.setH_clase(rset.getInt("Horas_de_clase"));
        asig.setH_lab(rset.getInt("Horas_de_Lab"));
        asig.setCr(rset.getInt("Creditos"));
        asig.setDescr(rset.getString("Descripcion"));
        list.add(asig);
        
        }
            rset.close();
            ps.close();
            con.close();
        }catch(SQLException e){
            System.err.println("Error..."+e);
        }
        return list;
    }
    
    @Override
    public List<Asignaturas> Listar2() {
        ArrayList<Asignaturas>list2=new ArrayList<Asignaturas>();
        String sql="SELECT *FROM asignaturas WHERE Año=1 AND Semestre='Segundo Semestre'";
        try{
        con=cn.getConnection();
        ps=con.prepareStatement(sql);
        rset=ps.executeQuery();
        while(rset.next()){
        Asignaturas asig=new Asignaturas();
        asig.setNum_asig(rset.getInt("Num_Asig"));
        asig.setAge(rset.getInt("Año"));
        asig.setSemestre(rset.getString("Semestre"));
        asig.setAsignatura(rset.getString("Asignatura"));
        asig.setH_clase(rset.getInt("Horas_de_clase"));
        asig.setH_lab(rset.getInt("Horas_de_Lab"));
        asig.setCr(rset.getInt("Creditos"));
        asig.setDescr(rset.getString("Descripcion"));
        list2.add(asig);
        
        }
            rset.close();
            ps.close();
            con.close();
        }catch(SQLException e){
            System.err.println("Error..."+e);
        }
        return list2;
    }
    @Override
    public List<Asignaturas> Listarv2() {
        ArrayList<Asignaturas>listv2=new ArrayList<Asignaturas>();
        String sql="SELECT *FROM asignaturas WHERE Año=2 AND Semestre='Verano'";
        try{
        con=cn.getConnection();
        ps=con.prepareStatement(sql);
        rset=ps.executeQuery();
        while(rset.next()){
        Asignaturas asig=new Asignaturas();
        asig.setNum_asig(rset.getInt("Num_Asig"));
        asig.setAge(rset.getInt("Año"));
        asig.setSemestre(rset.getString("Semestre"));
        asig.setAsignatura(rset.getString("Asignatura"));
        asig.setH_clase(rset.getInt("Horas_de_clase"));
        asig.setH_lab(rset.getInt("Horas_de_Lab"));
        asig.setCr(rset.getInt("Creditos"));
        asig.setDescr(rset.getString("Descripcion"));
        listv2.add(asig);
        
        }
            rset.close();
            ps.close();
            con.close();
        }catch(SQLException e){
            System.err.println("Error..."+e);
        }
        return listv2;
    }
    @Override
    public List<Asignaturas> Listarp2() {
        ArrayList<Asignaturas>listp2=new ArrayList<Asignaturas>();
        String sql="SELECT *FROM asignaturas WHERE Año=2 AND Semestre='Primer Semestre'";
        try{
        con=cn.getConnection();
        ps=con.prepareStatement(sql);
        rset=ps.executeQuery();
        while(rset.next()){
        Asignaturas asig=new Asignaturas();
        asig.setNum_asig(rset.getInt("Num_Asig"));
        asig.setAge(rset.getInt("Año"));
        asig.setSemestre(rset.getString("Semestre"));
        asig.setAsignatura(rset.getString("Asignatura"));
        asig.setH_clase(rset.getInt("Horas_de_clase"));
        asig.setH_lab(rset.getInt("Horas_de_Lab"));
        asig.setCr(rset.getInt("Creditos"));
        asig.setDescr(rset.getString("Descripcion"));
        listp2.add(asig);
        
        }
            rset.close();
            ps.close();
            con.close();
        }catch(SQLException e){
            System.err.println("Error..."+e);
        }
        return listp2;
    }
    
    @Override
    public List<Asignaturas> Listars2() {
        ArrayList<Asignaturas>lists2=new ArrayList<Asignaturas>();
        String sql="SELECT *FROM asignaturas WHERE Año=2 AND Semestre='Segundo Semestre'";
        try{
        con=cn.getConnection();
        ps=con.prepareStatement(sql);
        rset=ps.executeQuery();
        while(rset.next()){
        Asignaturas asig=new Asignaturas();
        asig.setNum_asig(rset.getInt("Num_Asig"));
        asig.setAge(rset.getInt("Año"));
        asig.setSemestre(rset.getString("Semestre"));
        asig.setAsignatura(rset.getString("Asignatura"));
        asig.setH_clase(rset.getInt("Horas_de_clase"));
        asig.setH_lab(rset.getInt("Horas_de_Lab"));
        asig.setCr(rset.getInt("Creditos"));
        asig.setDescr(rset.getString("Descripcion"));
        lists2.add(asig);
        
        }
            rset.close();
            ps.close();
            con.close();
        }catch(SQLException e){
            System.err.println("Error..."+e);
        }
        return lists2;
    }
    @Override
    public List<Asignaturas> Listarp3() {
        ArrayList<Asignaturas>listp3=new ArrayList<Asignaturas>();
        String sql="SELECT *FROM asignaturas WHERE Año=3 AND Semestre='Primer Semestre'";
        try{
        con=cn.getConnection();
        ps=con.prepareStatement(sql);
        rset=ps.executeQuery();
        while(rset.next()){
        Asignaturas asig=new Asignaturas();
        asig.setNum_asig(rset.getInt("Num_Asig"));
        asig.setAge(rset.getInt("Año"));
        asig.setSemestre(rset.getString("Semestre"));
        asig.setAsignatura(rset.getString("Asignatura"));
        asig.setH_clase(rset.getInt("Horas_de_clase"));
        asig.setH_lab(rset.getInt("Horas_de_Lab"));
        asig.setCr(rset.getInt("Creditos"));
        asig.setDescr(rset.getString("Descripcion"));
        listp3.add(asig);
        
        }
            rset.close();
            ps.close();
            con.close();
        }catch(SQLException e){
            System.err.println("Error..."+e);
        }
        return listp3;
    }
    
    @Override
    public List<Asignaturas> Listars3() {
        ArrayList<Asignaturas>lists3=new ArrayList<Asignaturas>();
        String sql="SELECT *FROM asignaturas WHERE Año=3 AND Semestre='Segundo Semestre'";
        try{
        con=cn.getConnection();
        ps=con.prepareStatement(sql);
        rset=ps.executeQuery();
        while(rset.next()){
        Asignaturas asig=new Asignaturas();
        asig.setNum_asig(rset.getInt("Num_Asig"));
        asig.setAge(rset.getInt("Año"));
        asig.setSemestre(rset.getString("Semestre"));
        asig.setAsignatura(rset.getString("Asignatura"));
        asig.setH_clase(rset.getInt("Horas_de_clase"));
        asig.setH_lab(rset.getInt("Horas_de_Lab"));
        asig.setCr(rset.getInt("Creditos"));
        asig.setDescr(rset.getString("Descripcion"));
        lists3.add(asig);
        
        }
            rset.close();
            ps.close();
            con.close();
        }catch(SQLException e){
            System.err.println("Error..."+e);
        }
        return lists3;
    }
    @Override
    public List<Asignaturas> Listarp4() {
        ArrayList<Asignaturas>listp4=new ArrayList<Asignaturas>();
        String sql="SELECT *FROM asignaturas WHERE Año=4 AND Semestre='Primer Semestre'";
        try{
        con=cn.getConnection();
        ps=con.prepareStatement(sql);
        rset=ps.executeQuery();
        while(rset.next()){
        Asignaturas asig=new Asignaturas();
        asig.setNum_asig(rset.getInt("Num_Asig"));
        asig.setAge(rset.getInt("Año"));
        asig.setSemestre(rset.getString("Semestre"));
        asig.setAsignatura(rset.getString("Asignatura"));
        asig.setH_clase(rset.getInt("Horas_de_clase"));
        asig.setH_lab(rset.getInt("Horas_de_Lab"));
        asig.setCr(rset.getInt("Creditos"));
        asig.setDescr(rset.getString("Descripcion"));
        listp4.add(asig);
        
        }
            rset.close();
            ps.close();
            con.close();
        }catch(SQLException e){
            System.err.println("Error..."+e);
        }
        return listp4;
    }
    
    @Override
    public List<Asignaturas> Listars4() {
        ArrayList<Asignaturas>lists4=new ArrayList<Asignaturas>();
        String sql="SELECT *FROM asignaturas WHERE Año=4 AND Semestre='Segundo Semestre'";
        try{
        con=cn.getConnection();
        ps=con.prepareStatement(sql);
        rset=ps.executeQuery();
        while(rset.next()){
        Asignaturas asig=new Asignaturas();
        asig.setNum_asig(rset.getInt("Num_Asig"));
        asig.setAge(rset.getInt("Año"));
        asig.setSemestre(rset.getString("Semestre"));
        asig.setAsignatura(rset.getString("Asignatura"));
        asig.setH_clase(rset.getInt("Horas_de_clase"));
        asig.setH_lab(rset.getInt("Horas_de_Lab"));
        asig.setCr(rset.getInt("Creditos"));
        asig.setDescr(rset.getString("Descripcion"));
        lists4.add(asig);
        
        }
            rset.close();
            ps.close();
            con.close();
        }catch(SQLException e){
            System.err.println("Error..."+e);
        }
        return lists4;
    }
    
    @Override
    public Asignaturas listv(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    @Override
    public Asignaturas list(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    @Override
    public Asignaturas list2(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    @Override
    public Asignaturas listv2(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    @Override
    public Asignaturas listp2(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    @Override
    public Asignaturas lists2(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    @Override
    public Asignaturas listp3(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    @Override
    public Asignaturas lists3(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    @Override
    public Asignaturas listp4(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    @Override
    public Asignaturas lists4(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    @Override
    public boolean Agregar(Asignaturas asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean Edit(Asignaturas asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean Eliminar(int num_asig) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    
}
