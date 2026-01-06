RESUME SETUP INSTRUCTIONS
========================

To enable the "Download Resume" button to work properly, follow these steps:

1. UPLOAD YOUR RESUME:
   - Place your resume PDF file in this public/ folder
   - Name it: MARCIAN_BENEDICT_D_RESUME.pdf
   
2. FILE LOCATION:
   - Current path: public/MARCIAN_BENEDICT_D_RESUME.pdf
   - The download button will automatically serve this file

3. VERIFICATION:
   - Click the "Download Resume" button in the Hero section
   - Your resume (Marcian_Benedict_Resume.pdf) should download

4. ALTERNATIVE:
   - If you have your resume in a different format or location,
     update the href in client/components/Hero.tsx:
     
     Change: href="/MARCIAN_BENEDICT_D_RESUME.pdf"
     To: href="/your-resume-filename.pdf"

NOTES:
------
- The download attribute specifies the filename users will receive
- Currently set to: Marcian_Benedict_Resume.pdf
- You can customize this in the Hero component if needed
