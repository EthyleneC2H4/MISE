package app.data;

import app.Post;
import app.UserPassword;
import org.springframework.data.repository.CrudRepository;

public interface PostRepo
        extends CrudRepository<Post, Long> {
}