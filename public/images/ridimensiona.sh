#!/bin/bash

# Check if a percentage value is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <percentage>"
  echo "Example: $0 50 to scale images to 50% of their original size"
  exit 1
fi

# Get the percentage from the argument
scale_percent=$1

# Loop through all image files with common extensions
for file in *.jpg *.jpeg *.png *.gif *.bmp; do
  # Check if the file exists (handles case where no files match the pattern)
  if [[ -f "$file" ]]; then
    # Get the file extension and base name without extension
    ext="${file##*.}"
    base="${file%.*}"
    
    # Downscale the image by the given percentage and save it
    convert "$file" -resize "${scale_percent}%" "${base}_scaled.${ext}"
    
    echo "Scaled $file by $scale_percent% and saved as ${base}_scaled.${ext}"
  fi
done

