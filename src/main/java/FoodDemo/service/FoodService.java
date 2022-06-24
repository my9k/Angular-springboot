package FoodDemo.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import FoodDemo.food.Food;

@Service
public interface FoodService extends JpaRepository<Food,Long> {

}
