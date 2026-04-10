public class TesteModelos {
    public static void main(String[] args) {


        // 001 - Teste  de senha par, gênero masculino
        Modelos t1 = new Modelos("Pedro Daniel", 97, "masculino");
        System.out.println("Pedro Daniel " + t1.identificaSala());


        // 002 - Teste  de senha ímpar, gênero masculino
        Modelos t2 = new Modelos("Julio César", 18, "masculino");
        System.out.println("Julio César " + t2.identificaSala());


        // 003 - Teste  de senha par, gênero feminino
        Modelos t3 = new Modelos("Bruna Marquezine", 29, "Feminino");
        System.out.println("Bruna Marquezine " + t3.identificaSala());


        // 004 - Teste  de senha par, gênero feminino
        Modelos t4 = new Modelos("Maria Salles", 66, "Feminino");
        System.out.println("Maria Salles " + t4.identificaSala());


    }
}
