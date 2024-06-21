import pandas as pd

# Load the CSV file
df = pd.read_csv('data.csv')

# Convert to JSON
json_data = df.to_json(orient='records')

# Save to a file
with open('products.json', 'w') as json_file:
    json_file.write(json_data)