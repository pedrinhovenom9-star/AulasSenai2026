public class ContaCorrente {

    private  double saldo;
    private boolean ativo;


    //métodos
    //faz depositos na conta corrente
    public void depositar(double valor){
        if (ativo){
            saldo += valor;
        }
    }
    // faz saques na conta corrente desde que o saldo esteja positivo
    public double sacar(double valor){
        if (ativo && saldo - valor >= 0 ) {
            saldo -= valor;
        }else {
            System.out.println(" Saldo insuficiente ou conta inativa");
        }
        return saldo;
    }
//métodos para ativar e inativar  as contas
    public  void ativarConta(){
        ativo = true;
    }
    public  void inativarConta(){
        ativo = false;
    }

    //getter

    public double getSaldo() {
        return saldo;
    }

}
