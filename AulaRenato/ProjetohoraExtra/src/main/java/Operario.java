public class Operario {

    private String nome;

    private int horaTrabalhadas;

    private double salario;

    public Operario(String nome, int horaTrabalhadas) {

        this.nome = nome;

        this.horaTrabalhadas = horaTrabalhadas;

    }

    //metodos

    public double calcularSalario(){

        if (horaTrabalhadas > 50) {

            salario = calcularHoraExtra(horaTrabalhadas) + 500.00;

        } else {

            salario = horaTrabalhadas * 10;

        }

        return salario;

    }

    public  double calcularHoraExtra(int horaTrabalhadas) {

        return (horaTrabalhadas - 50) * 20;

    }

}
