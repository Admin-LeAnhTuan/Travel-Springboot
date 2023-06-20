package Java.DoAnLapTrinhJava.Travel.Service;

import Java.DoAnLapTrinhJava.Travel.Enity.Payment;
import Java.DoAnLapTrinhJava.Travel.Enity.Tour;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PaymentService {
    public void savePayment(Payment payment);
    public List<Payment> getAllPayment();;
}
