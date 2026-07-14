import sys
from PIL import Image

def find_bboxes():
    img_path = 'design-inputs/mokxya-original-brand-board.png'
    img = Image.open(img_path).convert('RGB')
    width, height = img.size
    
    def get_bbox(x_start, x_end, y_start, y_end, bg_color=(255, 255, 255), tolerance=5):
        min_x = x_end
        min_y = y_end
        max_x = x_start
        max_y = y_start
        found = False
        for y in range(y_start, y_end):
            for x in range(x_start, x_end):
                r, g, b = img.getpixel((x, y))
                if abs(r - bg_color[0]) > tolerance or abs(g - bg_color[1]) > tolerance or abs(b - bg_color[2]) > tolerance:
                    if x < min_x: min_x = x
                    if x > max_x: max_x = x
                    if y < min_y: min_y = y
                    if y > max_y: max_y = y
                    found = True
        if found:
            return (min_x, min_y, max_x, max_y)
        return None

    # Top half (light lockup)
    top_bbox = get_bbox(0, width, 0, height // 2 + 100)
    print(f"Top BBox: {top_bbox}")
    
    # Just the mark (top part of the top half)
    if top_bbox:
        # scan for a horizontal gap to separate mark from wordmark
        mark_bottom = top_bbox[1]
        consecutive_white_rows = 0
        for y in range(top_bbox[1], top_bbox[3]):
            row_has_color = False
            for x in range(top_bbox[0], top_bbox[2]):
                r,g,b = img.getpixel((x, y))
                if abs(r - 255) > 5 or abs(g - 255) > 5 or abs(b - 255) > 5:
                    row_has_color = True
                    break
            if not row_has_color:
                consecutive_white_rows += 1
                if consecutive_white_rows > 20: # 20px gap
                    mark_bottom = y - 20
                    break
            else:
                consecutive_white_rows = 0
                mark_bottom = y
        mark_bbox = get_bbox(top_bbox[0], top_bbox[2], top_bbox[1], mark_bottom + 5)
        print(f"Mark BBox: {mark_bbox}")

    # Bottom left (app icon)
    bl_bbox = get_bbox(0, width // 2, height // 2, height)
    print(f"Bottom Left BBox (App Icon): {bl_bbox}")

    # Bottom right (dark lockup)
    br_bbox = get_bbox(width // 2, width, height // 2, height)
    print(f"Bottom Right BBox (Dark Lockup): {br_bbox}")

if __name__ == '__main__':
    find_bboxes()
