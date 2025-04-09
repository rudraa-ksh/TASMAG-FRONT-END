from google import genai
from google.genai import types
import os
from dotenv import load_dotenv

import PIL.Image

image = PIL.Image.open('Image.jpg')

client = genai.Client(api_key=os.getenv("GEMINI_KEY"))
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="What is my name?")

print(response.text)