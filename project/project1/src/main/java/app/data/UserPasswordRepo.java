package app.data;

import app.UserPassword;
import org.springframework.data.repository.CrudRepository;


public interface UserPasswordRepo
        extends CrudRepository<UserPassword, Long> {
}
