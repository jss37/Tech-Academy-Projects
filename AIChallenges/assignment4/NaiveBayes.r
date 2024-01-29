
install.packages("e1071")
Here's a simple script:

R
Copy code
# Load required libraries
library(e1071)

# Load the iris dataset
data(iris)

# Preprocess the data (for simplicity, we won't do much preprocessing here)
# You may want to perform additional preprocessing steps based on your needs

# Split the data into training and testing sets
set.seed(123)  # Set seed for reproducibility
sample_indices <- sample(1:nrow(iris), 0.7 * nrow(iris))
train_data <- iris[sample_indices, ]
test_data <- iris[-sample_indices, ]

# Train a Naive Bayes classifier
naive_bayes_model <- naiveBayes(Species ~ Sepal.Length + Sepal.Width + Petal.Length + Petal.Width, data = train_data)

# Make a prediction on the test set
predictions <- predict(naive_bayes_model, newdata = test_data)

# Evaluate the accuracy
accuracy <- sum(predictions == test_data$Species) / nrow(test_data)
cat("Accuracy:", accuracy, "\n")