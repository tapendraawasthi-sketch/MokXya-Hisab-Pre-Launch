import os
from PIL import Image, ImageDraw, ImageFont

def create_og_image():
    # 1. Image Settings
    width = 1200
    height = 630
    bg_color = "#071A2B" # var(--color-brand-navy)
    
    # 2. Create base image
    img = Image.new("RGBA", (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # 3. Load Logo
    logo_path = os.path.join("public", "brand", "mokxya-lockup-light.png")
    
    # Check if logo exists
    if not os.path.exists(logo_path):
        print(f"Error: Logo not found at {logo_path}")
        return

    logo = Image.open(logo_path)
    
    # Resize logo to a reasonable width while maintaining aspect ratio
    target_logo_width = 300
    w_percent = (target_logo_width / float(logo.size[0]))
    h_size = int((float(logo.size[1]) * float(w_percent)))
    logo = logo.resize((target_logo_width, h_size), Image.Resampling.LANCZOS)
    
    # Paste logo at center top-ish
    logo_x = (width - target_logo_width) // 2
    logo_y = 200
    img.paste(logo, (logo_x, logo_y), logo) # Use logo itself as mask for transparency
    
    # 4. Add Text
    # We will try to find a reasonable system font. If not, fallback to default.
    font_path = "C:\\Windows\\Fonts\\segoeui.ttf" # Windows standard UI font (Segoe UI)
    
    text = "Accounting that understands\nhow your business speaks."
    
    try:
        font = ImageFont.truetype(font_path, 48)
    except IOError:
        print(f"Font not found at {font_path}, using default.")
        font = ImageFont.load_default()
        
    # Get bounding box for text
    bbox = draw.textbbox((0,0), text, font=font, align="center")
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Draw text below logo
    text_x = (width - text_width) // 2
    text_y = logo_y + h_size + 40
    
    draw.text((text_x, text_y), text, font=font, fill="#FFFFFF", align="center")
    
    # 5. Add "Freedom from Complexity" at bottom
    try:
        font_small = ImageFont.truetype(font_path, 24)
    except IOError:
        font_small = ImageFont.load_default()
        
    tagline = "Freedom from Complexity"
    bbox_tagline = draw.textbbox((0,0), tagline, font=font_small)
    tagline_width = bbox_tagline[2] - bbox_tagline[0]
    
    draw.text(((width - tagline_width) // 2, height - 60), tagline, font=font_small, fill="#40D6B1") # var(--color-brand-teal)
    
    # 6. Save image
    out_path = os.path.join("public", "brand", "mokxya-og.png")
    # Convert RGBA to RGB for standard png just in case, but PNG supports RGBA. 
    # Let's just save as is.
    img.save(out_path, "PNG")
    print(f"Generated {out_path}")
    
    # Also we'll generate the favicons from the mokxya-mark.png
    mark_path = os.path.join("public", "brand", "mokxya-mark.png")
    if os.path.exists(mark_path):
        mark = Image.open(mark_path)
        
        # 16x16
        mark16 = mark.resize((16, 16), Image.Resampling.LANCZOS)
        mark16.save(os.path.join("public", "favicon-16x16.png"))
        
        # 32x32
        mark32 = mark.resize((32, 32), Image.Resampling.LANCZOS)
        mark32.save(os.path.join("public", "favicon-32x32.png"))
        
        # apple-touch-icon (180x180) - usually with solid background. The mark is transparent.
        # Let's make it a solid navy square and paste the mark.
        apple_icon = Image.new("RGBA", (180, 180), bg_color)
        target_mark_width = 120
        w_percent = (target_mark_width / float(mark.size[0]))
        h_size = int((float(mark.size[1]) * float(w_percent)))
        mark_resized = mark.resize((target_mark_width, h_size), Image.Resampling.LANCZOS)
        mark_x = (180 - target_mark_width) // 2
        mark_y = (180 - h_size) // 2
        apple_icon.paste(mark_resized, (mark_x, mark_y), mark_resized)
        
        # Convert to RGB so it saves as opaque PNG
        apple_icon = apple_icon.convert("RGB")
        apple_icon.save(os.path.join("public", "apple-touch-icon.png"))
        
        # icon-192.png (transparent background)
        mark192 = mark.resize((192, 192), Image.Resampling.LANCZOS)
        mark192.save(os.path.join("public", "icon-192.png"))
        
        # icon-512.png (transparent background)
        mark512 = mark.resize((512, 512), Image.Resampling.LANCZOS)
        mark512.save(os.path.join("public", "icon-512.png"))
        
        # favicon.ico (multi-size)
        mark.save(os.path.join("public", "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
        print("Generated favicon set.")
    else:
        print(f"Warning: Mark not found at {mark_path}. Favicons not generated.")

if __name__ == "__main__":
    create_og_image()
