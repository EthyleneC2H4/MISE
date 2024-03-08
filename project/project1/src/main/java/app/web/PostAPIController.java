package app.web;



import app.Post;
import app.UserPassword;
import app.data.PostRepo;
import app.data.UserPasswordRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/" ,produces="application/json")
@CrossOrigin(origins = "http://localhost:8080")
public class PostAPIController {
    private PostRepo repo;
    public PostAPIController(PostRepo repo){
        this.repo = repo;
    }

    @GetMapping(path="/posts")
    public  Iterable<Post> allPosts(){
        return repo.findAll();
    }
    @PostMapping(path = "/post",consumes="application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Post postPost(@RequestBody Post post) {
        return repo.save(post);
    }
}
