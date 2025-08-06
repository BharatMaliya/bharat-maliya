Build a professional, clean, and visually compelling personal portfolio website using Next.js. It should be SEO-friendly and server-side rendered.

### General Style:
- Modern, bold, yet clean design. Not generic or overly minimal.
- Use subtle animations, smooth scrolling, and tasteful transitions.
- Showcase professional photos of me (can be referenced as stored in `public/images/me/`)
- Project screenshots are stored in `public/projects/`

### Sections & Structure (ordered for best SEO and UX):
1. **Hero Section**  
   - Name: Bharat Maliya  
   - Title: Software Engineer  
   - Short tagline: "Engineering Scalable Systems for a Billion+ Viewers"
   - Display profile photo with background animation or gradient
   - Prominent links to Email, GitHub, LinkedIn (no contact form)
   - Highlighted Achievements:
     - 🎯 *Crickstats*: Used in 75% of professional cricket broadcasts globally. Integrated into live graphics for nearly all cricketing nations.  
     - 🔐 *BioChallenge*: Developed for UIDAI (India’s national ID authority) in collaboration with IIIT Hyderabad. Handled 1000+ secure submissions.  
   - Prominent links to Email, GitHub, LinkedIn (no contact form)

2. **Professional Summary**  
   - Summarize my expertise (taken from the markdown file)
   - Emphasize 4+ years experience and industries served

3. **Highlighted Achievements (Visually separated or bold cards)**  
   - 🎯 *Crickstats*: Used in 75% of professional cricket broadcasts globally. Integrated into live graphics for nearly all cricketing nations.  
   - 🔐 *BioChallenge*: Developed for UIDAI (India’s national ID authority) in collaboration with IIIT Hyderabad. Handled 1000+ secure submissions.  
   - 🏏 *IPL Auction App*: Powered $100M+ worth of player bids live, across 10 franchises.

4. **Projects Showcase**  
   - Display projects with image thumbnails (from `public/projects/`) and modal popup or separate page for full descriptions.
   - Use a grid layout, categorized or filterable.
   - Pull all project descriptions and tech stacks from the provided markdown file.

5. **Technical Skills**  
   - Display as badges or grouped tags
   - Group by category (Languages, Frameworks, Cloud, DevOps, etc.)

6. **Work Experience**  
   - Summarize the three latest roles
   - Add toggle to expand full details
   - Highlight metrics: “processed 1000+ submissions”, “served 1+ billion viewers”, etc.

7. **Education & Certification**  
   - Simple card format

8. **Contact Info (No form)**  
   - Clearly show:
     - Email: maliyabharat10@gmail.com  
     - GitHub: https://github.com/BharatMaliya  
     - LinkedIn: https://www.linkedin.com/in/bharat-maliya  
   - Sticky footer or top-right icon links

### Technical Requirements:
- Framework: Next.js (latest version)
- SEO:
  - Use `next/head` for meta tags
  - Add Open Graph tags and structured schema
  - Dynamic meta per project page
- Optimization:
  - Compress images, use lazy loading
  - Server-side rendering  needed
- Accessibility and performance optimized (Lighthouse score 90+)
- Mobile-responsive with Tailwind CSS
- keeps website modular
- keep primary color scheme consistent in tailwindcss
- keep secondary color scheme consistent in tailwindcss
- keep any style schema, in tailwindcss

### Additional Notes:
- You can reference detailed markdown resume content from `resume.md` (already provided)  
- Highlight projects with quantifiable metrics where possible
- Don't use a generic developer template—make it feel personalized and high-impact

