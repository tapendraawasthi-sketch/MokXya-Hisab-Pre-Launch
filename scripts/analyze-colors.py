import sys
from PIL import Image

def analyze():
    img_path = 'design-inputs/mokxya-original-brand-board.png'
    img = Image.open(img_path).convert('RGB')
    width, height = img.size
    print(f"Size: {width}x{height}")
    
    # Let's collect all colors that are not near-white
    colors = {}
    for y in range(height):
        for x in range(width):
            r, g, b = img.getpixel((x, y))
            if r < 240 or g < 240 or b < 240:
                h = f"#{r:02x}{g:02x}{b:02x}"
                colors[h] = colors.get(h, 0) + 1
                
    # Sort by frequency
    sorted_colors = sorted(colors.items(), key=lambda item: item[1], reverse=True)
    print("Top 10 non-white colors:")
    for i in range(min(10, len(sorted_colors))):
        print(f"  {sorted_colors[i][0]}: {sorted_colors[i][1]} pixels")

if __name__ == '__main__':
    analyze()
