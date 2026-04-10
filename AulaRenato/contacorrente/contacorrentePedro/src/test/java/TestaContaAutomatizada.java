import org.junit.jupiter.api.*;

public class TestaContaAutomatizada  {
    ContaCorrente conta;
    private static double depositarInicial;
    private static double sacaValido;
    private static double sacaInvalido;
    private static double saldoZerado;

    @BeforeAll // Vai iniciar isso antes dos testes
    public static void definirValoresPadrao() {
        depositarInicial = 100.00;
        sacaValido = 50.00;
        sacaInvalido = 200.00;
        saldoZerado = 0.00;
    }

    @BeforeEach
    public void iniciarTeste(){
        conta = new ContaCorrente();
        conta.ativarConta();
    }

    @Test
    @DisplayName("Teste 001 - Teste depósito conta ativa")
    public void deveDepositarComContaAtiva () {
        conta.depositar(depositarInicial);

        //teste afirmando que o valor 100.00 é igual ao atributo
        Assertions.assertEquals(depositarInicial, conta.getSaldo());
    }

    @Test
    @DisplayName("Teste 002 - Teste depósito conta inativa")
    public void deveDepositarComContaInativa () {
        conta.inativarConta();
        conta.depositar(depositarInicial);
        Assertions.assertEquals(saldoZerado, conta.getSaldo());
    }

    @Test
    @DisplayName("Teste 003 - Teste sacar com conta ativa")
    public void deveSacarComContaAtiva () {
        conta.depositar(depositarInicial);
        conta.sacar(sacaValido);
        Assertions.assertEquals(sacaValido, conta.getSaldo());
    }

    @Test
    @DisplayName("Teste 004 - Teste sacar com conta inativa com saldo")
    public void deveSacarComContaInativaComSaldo () {
        conta.depositar(depositarInicial);
        conta.inativarConta();
        conta.sacar(sacaValido);
        Assertions.assertEquals(depositarInicial, conta.getSaldo());
    }

    @Test
    @DisplayName("Teste 005 - Teste saque conta ativa com saldo insuficiente")
    public void deveSacarComContaAtivaComSaldoInsuficiente () {
        conta.depositar(depositarInicial);
        conta.sacar(sacaInvalido);
        Assertions.assertEquals(depositarInicial, conta.getSaldo());
    }

    @Test
    @DisplayName("Teste 006 - Teste saque conta inativa com saldo insuficiente")
    public void deveSacarComContaInativaComSaldoInsuficiente () {
        conta.depositar(depositarInicial);
        conta.inativarConta();
        conta.sacar(sacaInvalido);
        Assertions.assertEquals(depositarInicial, conta.getSaldo());
    }
}