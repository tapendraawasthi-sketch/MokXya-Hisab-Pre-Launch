import os
import sys
from PIL import Image

def prepare_assets():
    source_path = 'design-inputs/mokxya-original-brand-board.png'
    if not os.path.exists(source_path):
        print(f"ERROR: Authentic logo source missing at {source_path}")
        sys.exit(1)

    img = Image.open(source_path).convert('RGBA')

    os.makedirs('src/assets/brand', exist_ok=True)
    os.makedirs('public/brand', exist_ok=True)

    # Coordinates based on visual inspection and bounding box analysis
    # Mark: (466, 113, 786, 451) -> let's pad it slightly
    mark = img.crop((450, 95, 800, 465))
    mark.save('src/assets/brand/mokxya-mark.png')
    mark.save('public/brand/mokxya-mark.png')
    
    # Favicons (resized from mark)
    mark.resize((16, 16), Image.Resampling.LANCZOS).save('public/favicon-16x16.png')
    mark.resize((32, 32), Image.Resampling.LANCZOS).save('public/favicon-32x32.png')
    mark.resize((180, 180), Image.Resampling.LANCZOS).save('public/apple-touch-icon.png')
    mark.resize((192, 192), Image.Resampling.LANCZOS).save('public/icon-192.png')
    mark.resize((512, 512), Image.Resampling.LANCZOS).save('public/icon-512.png')

    # Full light lockup (vertical)
    lockup_light = img.crop((260, 95, 990, 740))
    lockup_light.save('src/assets/brand/mokxya-lockup-light.png')
    lockup_light.save('public/brand/mokxya-lockup-light.png')

    # Dark lockup (horizontal)
    # Background bounding box is ~ (496, 706, 1157, 939)
    # Let's crop exact bounds of the navy box
    # The bottom right bbox was (496, 706, 1157, 939). Let's pad just slightly or use exactly that.
    lockup_dark = img.crop((496, 706, 1157, 939))
    lockup_dark.save('src/assets/brand/mokxya-lockup-dark.png')
    lockup_dark.save('public/brand/mokxya-lockup-dark.png')

    # OG Image Source (Use the dark lockup on a 1200x630 navy canvas)
    og_img = Image.new('RGBA', (1200, 630), (13, 40, 74, 255)) # #0d284a
    # Paste dark lockup in center
    dl_w, dl_h = lockup_dark.size
    og_img.paste(lockup_dark, ((1200 - dl_w) // 2, (630 - dl_h) // 2))
    og_img.save('public/brand/mokxya-og-source.png')

    print("Brand assets generated successfully.")

if __name__ == '__main__':
    prepare_assets()
