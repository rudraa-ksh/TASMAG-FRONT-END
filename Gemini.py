from google import genai
from google.genai import types
import os
from dotenv import load_dotenv

import PIL.Image

image = PIL.Image.open('Images/Image 2.png')

client = genai.Client(api_key=os.getenv("GEMINI_KEY"))
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=["This is school/college time table of a student, please share the detailed information of each row and column in the image in nicely json format in human readable format. I only need day wise schedule with timing and subject.",image])

print(response.text)