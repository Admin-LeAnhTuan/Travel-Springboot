package Java.DoAnLapTrinhJava.Travel.Service;

import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Path;
@Service
public interface EmailService {
    public void sendEmailWithImages(String recipient) throws MessagingException, IOException;
    public void sendSuccessPayment(String recipient, String transactionId) throws MessagingException, IOException;
}
