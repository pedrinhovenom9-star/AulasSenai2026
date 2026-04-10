public class Modelos {
    private String nome;
    private String genero;
    private int senha;

    public Modelos(String nome, int senha, String genero) {
        this.nome = nome;
        this.senha = senha;
        this.genero = genero;
    }

    // criando o metodo
    public String identificaSala() {
        if (genero.equalsIgnoreCase("Feminino")) {
            if (senha % 2 == 0) {
                return "sala 2";
            } else {
                return "sala 4";
            }
        } else {
            if (senha % 2 == 1) {
                return "sala 1";
            } else {
                return "sala 3";
            }
        }
    }
}
