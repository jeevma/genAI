from pathlib import Path

import google.generativeai as genai
import os

def analyze_image_with_gemini(image_path: str, prompt: str) -> str:
    """
    Analyzes an image using Google's Gemini generative AI model and returns the text response.

    This function configures the Gemini API, loads an image from the specified path,
    and sends a prompt along with the image data to the model for analysis.

    Args:
        image_path (str): The path to the image file (e.g., "./images/cat.jpg").
        prompt (str): The text prompt to send to the Gemini model along with the image.

    Returns:
        str: The text response generated by the Gemini model.

    Raises:
        FileNotFoundError: If the specified image file does not exist.
        ValueError: If the GEMINI_API_KEY environment variable is not set.

    Example:
        >>> result = analyze_image_with_gemini("./images/dog.jpg", "what animals are in this image")
        >>> print(result)
        "The image contains a dog." # or similar response depending on the image and model.
    """

    # Check if the GEMINI_API_KEY environment variable is set.
    if "GEMINI_API_KEY" not in os.environ:
        raise ValueError("GEMINI_API_KEY environment variable must be set.")

    # Configure the Gemini API with the API key from the environment variables.
    genai.configure(api_key=os.environ["GEMINI_API_KEY"])

    # Instantiate the GenerativeModel.
    model = genai.GenerativeModel('gemini-1.5-flash')

    # Verify if the image file exists.
    if not Path(image_path).exists():
        raise FileNotFoundError(f"Image {image_path} not found")

    # Construct the prompt parts, including the image data.
    prompt_parts = [
        prompt,
        {
            "mime_type": "image/jpeg",
            "data": Path(image_path).read_bytes()
        }
    ]

    # Generate content using the Gemini model.
    response = model.generate_content(prompt_parts)

    # Return the text portion of the response.
    return response.text

# Example usage (using the provided image and prompt):
image_url = "./images/dog.jpg"
prompt_text = "what animals are in this image"

try:
    result = analyze_image_with_gemini(image_url, prompt_text)
    print(result)
except FileNotFoundError as e:
    print(f"Error: {e}")
except ValueError as e:
    print(f"Error: {e}")