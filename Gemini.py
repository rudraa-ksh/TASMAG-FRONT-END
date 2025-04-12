from google import genai
from google.genai import types
import os
from dotenv import load_dotenv

import PIL.Image

image = PIL.Image.open('Images/Image3.png')

client = genai.Client(api_key=os.getenv("GEMINI_KEY"))
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=["Give day-wise unique subjects from this timetable in JSON.",image])

print(response.text)