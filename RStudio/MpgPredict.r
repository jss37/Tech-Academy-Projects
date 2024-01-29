> model <- lm(mpg ~ hp, data = mtcars)
> 
> new_car <- data.frame(hp = 150)
> predicted_mpg <- predict(model, newdata = new_car)
> cat("Predicted MPG for a car with 150 hp:", predicted_mpg)