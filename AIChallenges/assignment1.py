import pandas as pd


df = pd.read_csv(r'C:\Users\jacob\Downloads\AIChallenges\example_dataset.csv')

print("Original DataFrame:")
print(df)

df_cleaned = df.dropna()  # Remove rows with any missing values


df['feature_sum'] = df[['feature_1', 'feature_2', 'feature_3', 'feature_4', 'feature_5']].sum(axis=1)


print("DataFrame with the new 'feature_sum':")
print(df)


df_cleaned = df_cleaned.drop_duplicates()


df_cleaned['feature_sum'] = df_cleaned[['feature_1', 'feature_2', 'feature_3', 'feature_4', 'feature_5']].sum(axis=1)


print("Here is your clean data:")
print(df_cleaned)

output_file_path = r'C:\Users\jacob\Downloads\AIChallenges\cleaned_dataset.csv'
df_cleaned.to_csv(output_file_path, index=False)
print(f"Cleaned data saved to {output_file_path}")
