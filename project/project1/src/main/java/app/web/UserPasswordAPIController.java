package app.web;


import app.UserPassword;
import app.data.UserPasswordRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/" ,produces="application/json")
@CrossOrigin(origins = "http://localhost:8080")
public class UserPasswordAPIController {

private UserPasswordRepo repo;

public UserPasswordAPIController(UserPasswordRepo repo){
    this.repo = repo;
}

    @GetMapping(path="/users",produces="application/json")
    public Iterable<UserPassword> allUser() {
        return repo.findAll();
    }
    @GetMapping(path="/user", produces="application/json")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        // 在这里执行数据库查询操作，检查用户名和密码是否匹配
        Iterable<UserPassword> allUsers = repo.findAll();

        UserPassword user = null;
        for (UserPassword user1 : allUsers) {
            if (user1.getUsername().equals(username)) {
                user = user1;
                break;
            }
        }

        if (user != null) {
            // 用户名存在
            if (user.getPassword().equals(password)) {
                // 密码匹配，登录成功
                return ResponseEntity.ok("登录成功");
            } else {
                // 密码不正确
                return ResponseEntity.badRequest().body("密码不正确");
            }
        } else {
            // 用户不存在
            return ResponseEntity.badRequest().body("用户不存在");
        }
    }
    @PostMapping(path = "/user",consumes="application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public UserPassword postOrder(@RequestBody UserPassword userPassword) {
        return repo.save(userPassword);
    }

}
