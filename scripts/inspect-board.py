import os
from PIL import Image

img_path = 'design-inputs/mokxya-original-brand-board.png'
img = Image.open(img_path)
print(f"Size: {img.size}")
print(f"Mode: {img.mode}")

# Let's get the dominant background color (should be white or near white)
bg_color = img.getpixel((10, 10))
print(f"Top-left pixel color: {bg_color}")
navy_color = None
teal_color = None

# Find some bounding boxes by looking for non-background colors
