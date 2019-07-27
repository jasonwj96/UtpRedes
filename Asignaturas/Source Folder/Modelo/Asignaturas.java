
package Modelo;


public class Asignaturas {
int num_asig;
    int age;
    String semestre;
    String asignatura;
    int h_clase;
    int h_lab;
    int cr;
    String descr;
    public Asignaturas() {
    }

    public Asignaturas(int num_asig, int age, String semestre, String asignatura, int h_clase, int h_lab, int cr, String descr) {
        this.num_asig = num_asig;
        this.age = age;
        this.semestre = semestre;
        this.asignatura = asignatura;
        this.h_clase = h_clase;
        this.h_lab = h_lab;
        this.cr = cr;
        this.descr = descr;
    }

    public int getNum_asig() {
        return num_asig;
    }

    public void setNum_asig(int num_asig) {
        this.num_asig = num_asig;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSemestre() {
        return semestre;
    }

    public void setSemestre(String semestre) {
        this.semestre = semestre;
    }

    public String getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(String asignatura) {
        this.asignatura = asignatura;
    }

    public int getH_clase() {
        return h_clase;
    }

    public void setH_clase(int h_clase) {
        this.h_clase = h_clase;
    }

    public int getH_lab() {
        return h_lab;
    }

    public void setH_lab(int h_lab) {
        this.h_lab = h_lab;
    }

    public int getCr() {
        return cr;
    }

    public void setCr(int cr) {
        this.cr = cr;
    }

    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    
}
