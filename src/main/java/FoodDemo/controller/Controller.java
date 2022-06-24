package FoodDemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import FoodDemo.food.Food;
import FoodDemo.service.FoodService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/food/api")
@RestController
public class Controller {
	FoodService f;
	
	@Autowired
	public void setFoodService(FoodService f) {
		this.f = f;
	}
	@GetMapping("/")
	public ResponseEntity<List<Food>> getAll() {
		return ResponseEntity.ok(f.findAll());
	}
	@GetMapping("/home")
	public String Home() {
		return "This  page is working properly";
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Food> findById(@PathVariable Long id) {
		return ResponseEntity.ok(f.findById(id).orElse(null));
	}
	
	@PostMapping("/")
	public ResponseEntity<Food> add(@RequestBody Food fo) {
		return ResponseEntity.ok(f.save(fo));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Food> update(@RequestBody Food fo,@PathVariable Long id) {
		fo.setId(id);
		return ResponseEntity.ok(f.save(fo));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Food> delete(@PathVariable Long id) {
		f.findById(id).ifPresent(f::delete);
		return ResponseEntity.ok().build();
	}
	
	
}
