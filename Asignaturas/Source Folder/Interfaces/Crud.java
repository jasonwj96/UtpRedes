
package Interfaces;
import Modelo.Asignaturas;
import java.util.List;

/**
 *
 * @author JKMR112526
 */
public interface Crud {
	public List<Asignaturas> Listarv();
    public List<Asignaturas> Listar();
    public List<Asignaturas> Listar2();
    public List<Asignaturas> Listarv2();
    public List<Asignaturas> Listarp2();
    public List<Asignaturas> Listars2();
    public List<Asignaturas> Listarp3();
    public List<Asignaturas> Listars3();
    public List<Asignaturas> Listarp4();
    public List<Asignaturas> Listars4();
    public Asignaturas listv(int num_asig);
    public Asignaturas list(int num_asig);
    public Asignaturas list2(int num_asig);
    public Asignaturas listv2(int num_asig);
    public Asignaturas listp2(int num_asig);
    public Asignaturas lists2(int num_asig);
    public Asignaturas listp3(int num_asig);
    public Asignaturas lists3(int num_asig);
    public Asignaturas listp4(int num_asig);
    public Asignaturas lists4(int num_asig);
    public boolean Agregar(Asignaturas asig);
    public boolean Edit(Asignaturas asig);
    public boolean Eliminar(int num_asig);
}
