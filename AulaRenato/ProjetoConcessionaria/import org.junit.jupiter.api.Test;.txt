import org.junit.jupiter.api.Test;
import java.util.*;
import static org.junit.jupiter.api.Assertions.*;

public class testaVendaAutomatica {

    Venda venda = new Venda();

// ================= MOTOR 1 =================

    @Test
    void t01_motor1_semAcessorio(){
        double r = venda.calcularValorTotal(50000,1,new ArrayList<>());
        assertTrue(r > 0);
    }

    @Test
    void t02_motor1_alarme(){
        List<String> l = List.of("Alarme");
        double r = venda.calcularValorTotal(50000,1,l);
        assertTrue(r > 1200);
    }

    @Test
    void t03_motor1_sensor(){
        List<String> l = List.of("Sensor Estacionamento");
        double r = venda.calcularValorTotal(50000,1,l);
        assertTrue(r > 350);
    }

    @Test
    void t04_motor1_pelicula(){
        List<String> l = List.of("Película Isufilm");
        double r = venda.calcularValorTotal(50000,1,l);
        assertTrue(r > 80);
    }

    @Test
    void t05_motor1_varios(){
        List<String> l = List.of("Alarme","Sensor Estacionamento");
        double r = venda.calcularValorTotal(50000,1,l);
        assertTrue(r > 1500);
    }

// ================= MOTOR 2 =================

    @Test
    void t06_motor2_semAcessorio(){
        double r = venda.calcularValorTotal(50000,2,new ArrayList<>());
        assertTrue(r > 0);
    }

    @Test
    void t07_motor2_alarme(){
        List<String> l = List.of("Alarme");
        double r = venda.calcularValorTotal(50000,2,l);
        assertTrue(r > 1200);
    }

    @Test
    void t08_motor2_sensor(){
        List<String> l = List.of("Sensor Estacionamento");
        double r = venda.calcularValorTotal(50000,2,l);
        assertTrue(r > 350);
    }

    @Test
    void t09_motor2_pelicula(){
        List<String> l = List.of("Película Isufilm");
        double r = venda.calcularValorTotal(50000,2,l);
        assertTrue(r > 80);
    }

    @Test
    void t10_motor2_varios(){
        List<String> l = List.of("Alarme","Película Isufilm");
        double r = venda.calcularValorTotal(50000,2,l);
        assertTrue(r > 1280);
    }

// ================= NOVOS ACESSÓRIOS =================

    @Test
    void t11_multimidia(){
        List<String> l = List.of("Multimídia");
        double r = venda.calcularValorTotal(50000,1,l);
        assertTrue(r > 0);
    }

    @Test
    void t12_bancoCouro(){
        List<String> l = List.of("Banco de Couro");
        double r = venda.calcularValorTotal(50000,1,l);
        assertTrue(r > 0);
    }

    @Test
    void t13_rodaLiga(){
        List<String> l = List.of("Roda Liga Leve");
        double r = venda.calcularValorTotal(50000,1,l);
        assertTrue(r > 0);
    }

    @Test
    void t14_cameraRe(){
        List<String> l = List.of("Câmera de Ré");
        double r = venda.calcularValorTotal(50000,1,l);
        assertTrue(r > 0);
    }

    @Test
    void t15_tetoSolar(){
        List<String> l = List.of("Teto Solar");
        double r = venda.calcularValorTotal(50000,1,l);
        assertTrue(r > 0);
    }

    @Test
    void t16_combo1(){
        List<String> l = List.of("Multimídia","Banco de Couro");
        double r = venda.calcularValorTotal(50000,2,l);
        assertTrue(r > 0);
    }

    @Test
    void t17_combo2(){
        List<String> l = List.of("Roda Liga Leve","Câmera de Ré");
        double r = venda.calcularValorTotal(50000,2,l);
        assertTrue(r > 0);
    }

    @Test
    void t18_combo3(){
        List<String> l = List.of("Teto Solar","Alarme");
        double r = venda.calcularValorTotal(50000,2,l);
        assertTrue(r > 0);
    }

    @Test
    void t19_listaGrande(){
        List<String> l = Arrays.asList("Alarme","Sensor Estacionamento","Película Isufilm");
        double r = venda.calcularValorTotal(50000,1,l);
        assertTrue(r > 0);
    }

    @Test
    void t20_listaVazia(){
        double r = venda.calcularValorTotal(50000,1,new ArrayList<>());
        assertTrue(r > 0);
    }

// ================= MÉTODO SEM MOTOR =================

    @Test
    void t21_semMotor_semAcessorio(){
        double r = venda.calcularValorTotal(50000,new ArrayList<>());
        assertTrue(r > 0);
    }

    @Test
    void t22_semMotor_alarme(){
        List<String> l = List.of("Alarme");
        double r = venda.calcularValorTotal(50000,l);
        assertTrue(r > 0);
    }

    @Test
    void t23_semMotor_varios(){
        List<String> l = List.of("Alarme","Película Isufilm");
        double r = venda.calcularValorTotal(50000,l);
        assertTrue(r > 0);
    }

// ================= CLIENTE =================

    @Test
    void t24_taxista(){
        assertTrue(venda.verificarTipoCliente("Taxista"));
    }

    @Test
    void t25_comum(){
        assertFalse(venda.verificarTipoCliente("Comum"));
    }

    @Test
    void t26_outroTexto(){
        assertFalse(venda.verificarTipoCliente("Pedro"));
    }


}
