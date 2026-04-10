public class TesteContaCorrente {
    public static void main(String[] args) {

        // 001 - Teste depósito conta ativa
        ContaCorrente conta1 = new ContaCorrente();
        conta1.ativarConta();
        conta1.depositar(100.00);
        System.out.println("001 - Teste depósito conta ativa");
        System.out.println("O saldo é de " + conta1.getSaldo());

        // 002 - Teste depósito conta inativa
        ContaCorrente conta2 = new ContaCorrente();
        conta2.inativarConta();
        conta2.depositar(100.00);
        System.out.println("002 - Teste depósito conta inativa");
        System.out.println("O saldo é de " + conta2.getSaldo());

        // 003 - Teste saque conta ativa com saldo suficiente
        ContaCorrente conta3 = new ContaCorrente();
        conta3.ativarConta();
        conta3.depositar(100.00);
        conta3.sacar(50.00);
        System.out.println("003 - Teste saque conta ativa com saldo suficiente");
        System.out.println("O saldo é de " + conta3.getSaldo());

        // 004 - Teste saque conta inativa
        ContaCorrente conta4 = new ContaCorrente();
        conta4.ativarConta();
        conta4.depositar(100.00);
        conta4.inativarConta();
        conta4.sacar(50.00);
        System.out.println("004 - Teste saque conta inativa");
        System.out.println("O saldo é de " + conta4.getSaldo());

        // 005 - Teste saque conta ativa com saldo insuficiente
        ContaCorrente conta5 = new ContaCorrente();
        conta5.ativarConta();
        conta5.depositar(100.00);
        conta5.sacar(200.00);
        System.out.println("005 - Teste saque conta ativa com saldo insuficiente");
        System.out.println("O saldo é de " + conta5.getSaldo());

        // 006 - Teste saque conta inativa com saldo insuficiente
        ContaCorrente conta6 = new ContaCorrente();
        conta6.ativarConta();
        conta6.depositar(100.00);
        conta6.inativarConta();
        conta6.sacar(200.00);
        System.out.println("006 - Teste saque conta inativa com saldo insuficiente");
        System.out.println("O saldo é de " + conta6.getSaldo());
    }
}
