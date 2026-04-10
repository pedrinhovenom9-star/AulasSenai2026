import org.junit.jupiter.api.*;

public class TestaContaTrueFalseAutomatizado {
    ContaCorrente conta;
    private static float depositarInicial;
    private static float sacaValido;
    private static float sacaInvalido;
    private static float saldoZerado;

    @BeforeEach
    public void iniciarTeste(){
        conta = new ContaCorrente();
        conta.ativarConta();
    }

    @BeforeAll
    public static void definirValoresPadrao(){
        depositarInicial = 100.00f;
        sacaValido = 50.00f;
        sacaInvalido = 200.00f;
        saldoZerado = 0.00f;
    }

    @Test
    @DisplayName("teste 001 - Testa metodo depositar com conta ativa")
    public void deveDepositarComComtaAtiva (){

        Assertions.assertTrue(conta.depositar(depositarInicial));

    }

    @Test
    @DisplayName("teste 002 - Testa metodo depositar com conta inativa")
    public void deveDepositarComComtaInativa (){
        conta.inativarConta();
        conta.depositar(depositarInicial);
        Assertions.assertFalse(conta.depositar(depositarInicial));
    }

    @Test
    @DisplayName("teste 003 - Teste saque conta ativa com saldo suficiente")
    public void deveSacarComComtaAtivaComSaldo (){
        conta.depositar(depositarInicial);
        Assertions.assertTrue(conta.sacar(sacaValido));
    }

    @Test
    @DisplayName("teste 004 - Teste saque conta inativa com saldo suficiente")
    public void deveSacarComComtaInativaComSaldo (){
        conta.depositar(depositarInicial);
        conta.inativarConta();
        Assertions.assertFalse(conta.sacar(sacaValido));
    }

    @Test
    @DisplayName("teste 005 - Teste saque conta ativa sem saldo suficiente")
    public void deveSacarComComtaAtivasemSaldo (){
        conta.depositar(depositarInicial);
        Assertions.assertFalse(conta.sacar(sacaInvalido));
    }

    @Test
    @DisplayName("teste 006 - Teste saque conta inativa sem saldo suficiente")
    public void deveSacarComComtaInativasemSaldo (){
        conta.inativarConta();
        Assertions.assertFalse(conta.sacar(sacaValido));
    }



}
