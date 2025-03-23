from itertools import count  # Import the count function from the itertools module.
import google.generativeai as genai  # type: ignore # Import the Google Generative AI library.
import os  # Import the operating system module for environment variable access.

# Configure the Generative AI library with the API key from the environment variable.
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

# [Commented Out Code Block 1]
# This section was used to list and count available models that support generateContent.
# count = 0  # Initialize a counter variable.
# for model in genai.list_models():  # Iterate through the available models.
#     if 'generateContent' in model.supported_generation_methods:  # Check if the model supports generateContent.
#         count += 1  # Increment the counter if it does.
#         print(model)  # Print the model information.
# print(count)  # Print the total count of models supporting generateContent.

# Configuration dictionary for the Generative AI model.
config = {"temperature": 0.1, "top_p": 0.1, "max_output_tokens": 256}
# Alternative configuration, only setting temperature.
# config = {"temperature": 0.1}

# [Commented Out Code Block 2]
# This section was used to generate content based on a prompt to pick a city.
# prompt_parts = ["Pick a city in the world"]  # Define the prompt.
# model = genai.GenerativeModel('gemini-1.5-flash', generation_config=config)  # Initialize the Generative AI model with the specified configuration.
# response = model.generate_content(prompt_parts)  # Generate content based on the prompt.
# print(response.text)  # Print the generated text.

# Define the prompt for generating a joke.
prompt_parts = ["tell me a joke"]

# Initialize the Generative AI model 'gemini-1.5-flash' with the configured settings.
model = genai.GenerativeModel('gemini-1.5-flash', generation_config=config)

# Generate content based on the joke prompt.
response = model.generate_content(prompt_parts)

# Print the generated joke text.
print(response.text)