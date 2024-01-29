> data(iris)

>  summary_stats <- summary(iris)
> print(summary_stats)

> plot(iris$Sepal.Length, iris$Sepal.Width, main="Scatter Plot of Sepal Length vs Sepal Width", 
+      xlab="Sepal Length", ylab="Sepal Width", col=iris$Species)
> legend("topright", legend=levels(iris$Species), col=1:3, pch=1)
> 

> 