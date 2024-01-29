import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.datasets import mnist
from sklearn.model_selection import train_test_split
import numpy as np 

digits = datasets.load_digits()
images = digits.images
labels = digits.target


(X_train, y_train), (X_test, y_test) = mnist.load_data()


X_train = X_train / 255.0
X_test = X_test / 255.0

X_train, X_val, y_train, y_val = train_test_split(images, labels, test_size=0.2, random_state=42)

model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(8, 8, 1)),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(10, activation='softmax') 
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.summary()


model.fit(X_train.reshape(-1, 8, 8, 1), y_train, epochs=5, validation_data=(X_val.reshape(-1, 8, 8, 1), y_val))

val_loss, val_accuracy = model.evaluate(X_val.reshape(-1, 8, 8, 1), y_val)
print("\nValidation Accuracy:", val_accuracy)
print("Validation Loss:", val_loss)