import java.util.List;

public class Venda {
    private double valorTotal = 0;

    // Método
    public double calcularValorTotal(double valorCarro, int motor, List<String> listaAces){
        double valorTotal = valorCarro * 1.12;
        valorTotal += valorCarro  * 0.076;
        if (motor == 1){
            valorTotal += valorCarro * 0.03;
        }else{
            valorTotal += valorCarro * 0.10;
        }
        for (String item: listaAces){
            if (item.equals("Alarme")) valorTotal += 1200.00;
            if (item.equals("Sensor Estacionamento")) valorTotal += 350.00;
            if (item.equals("Película Isufilm")) valorTotal += 80.00;
        }
        return valorTotal;
    }

    public double calcularValorTotal(double valorCarro, List<String> listaAces){
        double valorTotal = valorCarro  * 0.076;
        for (String item: listaAces){
            if (item.equals("Alarme")) valorTotal += 1200.00;
            if (item.equals("Sensor Estacionamento")) valorTotal += 350.00;
            if (item.equals("Película Isufilm")) valorTotal += 80.00;
        }
        return valorTotal;
    }

    public boolean verificarTipoCliente(String tipoCliente){
        if (tipoCliente.equals("Taxista")){
            return true;
        }else {
            return false;
        }
    }
}
