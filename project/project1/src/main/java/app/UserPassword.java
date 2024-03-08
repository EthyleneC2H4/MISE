package app;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
@Data
@Entity
public class UserPassword {
    public UserPassword(String UserName, String Password){
        this.Password = Password;
        this.Username = UserName;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    private String Username;
    @NotNull
    private String Password;

    public UserPassword() {

    }
}
