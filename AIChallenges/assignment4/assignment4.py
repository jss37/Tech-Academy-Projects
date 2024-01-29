import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

file_path = r'c:\Users\jacob\Downloads\AIChallenges\assignment4\exampledataset2.csv'
df = pd.read_csv(file_path)
print(df.head())

feature_column = 'text'
target_column = 'sentiment'

X = df[feature_column]
y = df[target_column]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

vectorizer = CountVectorizer()

X_train_vectorized = vectorizer.fit_transform(X_train)
X_test_vectorized = vectorizer.transform(X_test)

svm_classifier = SVC()
svm_classifier.fit(X_train_vectorized, y_train)
predictions = svm_classifier.predict(X_test_vectorized)

accuracy = accuracy_score(y_test, predictions)
print("Accuracy:", accuracy)

report = classification_report(y_test, predictions)
print("Classification Report:\n", report)

cm = confusion_matrix(y_test, predictions)
print("Confusion Matrix:\n", cm)
