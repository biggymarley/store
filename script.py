# import pandas as pd

# # Load the CSV file
# df = pd.read_csv('datas.csv')

# # Convert to JSON
# json_data = df.to_json(orient='records')

# # Save to a file
# with open('products.json', 'w') as json_file:
#     json_file.write(json_data)
import pandas as pd
import json

# Load the CSV file
df = pd.read_csv('datas.csv')

# Get a list of all columns
all_columns = df.columns.tolist()

# Create a dictionary for aggregation
agg_dict = {}
for col in all_columns:
    if col == 'Handle':
        continue  # Skip the 'Handle' column as it's our grouping key
    elif col == 'Variant Image':
        agg_dict[col] = lambda x: x.tolist()  # Aggregate 'Image Src' into a list
    else:
        agg_dict[col] = 'first'  # For all other columns, take the first value

# Group by 'Handle' and aggregate all other columns
grouped_df = df.groupby('Handle').agg(agg_dict).reset_index()

# Convert to JSON
json_data = grouped_df.to_json(orient='records')

# Save to a file
with open('products.json', 'w') as json_file:
    json_file.write(json_data)