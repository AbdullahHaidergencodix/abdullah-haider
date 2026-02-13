const puppeteer = require('puppeteer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('📸 Capturing Lapak Skincare...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  try {
    await page.goto('https://lapakskincare.vercel.app', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for content to load
    await page.waitForTimeout(3000);
    
    // Take screenshot
    const screenshotBuffer = await page.screenshot({
      type: 'png',
      fullPage: false
    });
    
    // Create optimized versions
    const projectDir = path.join(__dirname, '../public/projects');
    if (!fs.existsSync(projectDir)) {
      fs.mkdirSync(projectDir, { recursive: true });
    }
    
    // Full size (1920x1080)
    await sharp(screenshotBuffer)
      .resize(1920, 1080, { fit: 'cover', position: 'top' })
      .png({ quality: 90 })
      .toFile(path.join(projectDir, 'lapak-skincare.png'));
    
    // Thumbnail (800x450)
    await sharp(screenshotBuffer)
      .resize(800, 450, { fit: 'cover', position: 'top' })
      .png({ quality: 85 })
      .toFile(path.join(projectDir, 'lapak-skincare-thumb.png'));
    
    // WebP versions for performance
    await sharp(screenshotBuffer)
      .resize(1920, 1080, { fit: 'cover', position: 'top' })
      .webp({ quality: 85 })
      .toFile(path.join(projectDir, 'lapak-skincare.webp'));
    
    await sharp(screenshotBuffer)
      .resize(800, 450, { fit: 'cover', position: 'top' })
      .webp({ quality: 80 })
      .toFile(path.join(projectDir, 'lapak-skincare-thumb.webp'));
    
    console.log('✅ Screenshots saved to public/projects/');
    
  } catch (error) {
    console.error('Error capturing screenshot:', error);
  } finally {
    await browser.close();
  }
})();
