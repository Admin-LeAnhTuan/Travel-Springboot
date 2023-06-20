package Java.DoAnLapTrinhJava.Travel.Model;

public class PaymentModel {
    private Integer received;
    private String transactionId;
    private String description;
    private String userId;
    private Long tourId;
    private String quantity;
    private String status;
    private String gmail;

    public PaymentModel() {
    }

    public Integer getReceived() {
        return received;
    }

    public void setReceived(Integer received) {
        this.received = received;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Long getTourId() {
        return tourId;
    }

    public void setTourId(Long tourId) {
        this.tourId = tourId;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getGmail() {
        return gmail;
    }

    public void setGmail(String gmail) {
        this.gmail = gmail;
    }

    public PaymentModel(Integer received, String transactionId, String description, String userId, Long tourId, String quantity, String status, String gmail) {
        this.received = received;
        this.transactionId = transactionId;
        this.description = description;
        this.userId = userId;
        this.tourId = tourId;
        this.quantity = quantity;
        this.status = status;
        this.gmail = gmail;
    }
}
