public class TestaOperario {
    public static void main(String[] args) {

        Operario operario1 = new Operario("Lucas", 50);
        System.out.println("001 teste salário até 50 horas");
        double salario1 = operario1.calcularSalario();
        System.out.println("Salário calculado: " + salario1);
        if (salario1 == 500.00) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }

        Operario operario2 = new Operario("Iginho job", 80);
        System.out.println("002 teste salário acima de 50 horas");
        double salario2 = operario2.calcularSalario();
        System.out.println("Salário calculado: " + salario2);
        if (salario2 == 500.00) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }

        Operario operario3 = new Operario("Marcos Leonardo", 45);
        System.out.println("003 teste o salário de hora Extra Abaixo de 50 horas");
        double salario3 = operario3.calcularHoraExtra(0);
        System.out.println("Salário calculado: " + salario3);
        if (salario3 == 500.00) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }



    }
}
