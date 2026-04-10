public class TesteComparacao {
    public static void main(String[] args) {
        ContaCorrente conta1 = new ContaCorrente();

        System.out.println("001 Teste de depósito com " + "conta ativa");
        conta1.ativarConta();
        conta1.depositar(100.00);
        if (conta1.getSaldo() == 100.00) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }

        System.out.println("++++++++++++++++++++++++++++++++++++++++++++++");
        ContaCorrente conta2 = new ContaCorrente();
        System.out.println("002 Teste de depósito com " + "conta inativa");
        conta2.inativarConta();
        conta2.depositar(100.00);
        if (conta2.getSaldo() == 0.00) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }

        System.out.println("++++++++++++++++++++++++++++++++++++++++++++++");
        ContaCorrente conta3 = new ContaCorrente();
        System.out.println("003 Teste sacar com " + "conta ativa e com saldo");
        conta3.ativarConta();
        conta3.depositar(100.00);
        conta3.sacar(50.00);
        if (conta3.getSaldo() == 50.00) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }

        System.out.println("++++++++++++++++++++++++++++++++++++++++++++++");
        ContaCorrente conta4 = new ContaCorrente();
        System.out.println("004 Teste sacar com " + "conta inativa e com saldo");
        conta4.inativarConta();
        conta4.depositar(100.00);
        conta4.sacar(50.00);
        if (conta4.getSaldo() == 100.00) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }

        System.out.println("++++++++++++++++++++++++++++++++++++++++++++++");
        ContaCorrente conta5 = new ContaCorrente();
        System.out.println("005 Teste sacar com " + "conta ativa e sem saldo");
        conta5.ativarConta();
        conta5.depositar(100.00);
        conta5.sacar(200.00);
        if (conta5.getSaldo() == 100.00) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }

        System.out.println("++++++++++++++++++++++++++++++++++++++++++++++");
        ContaCorrente conta6 = new ContaCorrente();
        System.out.println("006 Teste sacar com " + "conta inativa e sem saldo");
        conta6.inativarConta();
        conta6.depositar(100.00);
        conta6.sacar(200.00);
        if (conta6.getSaldo() == 100.00) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }

    }
}