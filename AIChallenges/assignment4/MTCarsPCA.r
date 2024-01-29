> pca <- prcomp(mtcars[, -c(1,8,9,10)], scale = TRUE)
> scores <- as.data.frame(pca$x[, 1:2])
> plot(scores$PC2, xlab = "PC1", ylab = "PC2", main ="Scatter Plot of PC1 versus PC2")