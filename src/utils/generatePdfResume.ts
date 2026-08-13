import { jsPDF } from 'jspdf';
import { PROFILE_DATA, CORE_SKILLS_LIST, TOOLS_LIST, EXPERIENCES, EDUCATION } from '../data/portfolioData';

export type PdfTheme = 'light' | 'dark';

export function generatePdfResume(theme: PdfTheme = 'light'): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter',
  });

  const isDark = theme === 'dark';
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  // Theme Colors
  const bgColor = isDark ? [15, 23, 42] : [255, 255, 255]; // #0f172a vs #ffffff
  const textColor = isDark ? [241, 245, 249] : [15, 23, 42]; // #f1f5f9 vs #0f172a
  const subtextColor = isDark ? [148, 163, 184] : [71, 85, 105]; // #94a3b8 vs #475569
  const accent1 = isDark ? [132, 204, 22] : [101, 163, 13]; // #84cc16 vs #65a30d
  const accent2 = isDark ? [251, 191, 36] : [180, 83, 9]; // #fbbf24 vs #b45309
  const dividerColor = isDark ? [51, 65, 85] : [226, 232, 240]; // #334155 vs #e2e8f0

  let y = margin;

  // Helper: Background fill for entire page
  const drawBackground = () => {
    doc.setFillColor(bgColor[0], bgColor[1], bgColor[2]);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
  };

  // Helper: Check for page height overflow
  const checkPageOverflow = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - margin) {
      doc.addPage();
      drawBackground();
      y = margin;
    }
  };

  // 1. Draw Page 1 Background
  drawBackground();

  // 2. HEADER
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text(PROFILE_DATA.name.toUpperCase(), margin, y);
  y += 20;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(accent1[0], accent1[1], accent1[2]);
  doc.text(PROFILE_DATA.tagline.toUpperCase(), margin, y);
  y += 14;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(subtextColor[0], subtextColor[1], subtextColor[2]);
  const contactLine = `${PROFILE_DATA.location}  |  ${PROFILE_DATA.formattedPhone}  |  ${PROFILE_DATA.email}`;
  doc.text(contactLine, margin, y);
  y += 12;

  const linksLine = `LinkedIn: ${PROFILE_DATA.linkedin}  |  ArtStation: ${PROFILE_DATA.artstation}`;
  doc.text(linksLine, margin, y);
  y += 14;

  // Divider line
  doc.setDrawColor(dividerColor[0], dividerColor[1], dividerColor[2]);
  doc.setLineWidth(1);
  doc.line(margin, y, pageWidth - margin, y);
  y += 16;

  // Helper: Section Header
  const renderSectionHeader = (title: string) => {
    checkPageOverflow(30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(accent1[0], accent1[1], accent1[2]);
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(dividerColor[0], dividerColor[1], dividerColor[2]);
    doc.setLineWidth(0.75);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;
  };

  // 3. SUMMARY
  renderSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const summaryLines = doc.splitTextToSize(PROFILE_DATA.summary, contentWidth);
  checkPageOverflow(summaryLines.length * 11);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11 + 10;

  // 4. CORE SKILLS & TOOLS
  renderSectionHeader('Core Skills & Software');
  
  // Two column skill layout
  const halfWidth = contentWidth / 2 - 10;
  const top10Skills = CORE_SKILLS_LIST.slice(0, 10);
  const col1 = top10Skills.slice(0, 5);
  const col2 = top10Skills.slice(5, 10);

  checkPageOverflow(70);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);

  let startYSkills = y;
  col1.forEach((skill, idx) => {
    doc.text(`• ${skill}`, margin, startYSkills + idx * 11);
  });
  col2.forEach((skill, idx) => {
    doc.text(`• ${skill}`, margin + halfWidth + 20, startYSkills + idx * 11);
  });

  y = startYSkills + Math.max(col1.length, col2.length) * 11 + 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(accent2[0], accent2[1], accent2[2]);
  const toolsText = `TOOLS & SOFTWARE: ${TOOLS_LIST.join('  |  ')}`;
  const toolsLines = doc.splitTextToSize(toolsText, contentWidth);
  doc.text(toolsLines, margin, y);
  y += toolsLines.length * 11 + 12;

  // 5. EXPERIENCE
  renderSectionHeader('Professional Experience');

  EXPERIENCES.forEach((exp) => {
    checkPageOverflow(60);

    // Role & Company Line
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(`${exp.company} — `, margin, y);
    const companyWidth = doc.getTextWidth(`${exp.company} — `);
    
    doc.setTextColor(accent2[0], accent2[1], accent2[2]);
    doc.text(exp.role, margin + companyWidth, y);

    // Duration & Location on the right
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(subtextColor[0], subtextColor[1], subtextColor[2]);
    const rightInfo = `${exp.location} | ${exp.duration}`;
    doc.text(rightInfo, pageWidth - margin, y, { align: 'right' });
    y += 12;

    // Role Summary
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(subtextColor[0], subtextColor[1], subtextColor[2]);
    const expSumLines = doc.splitTextToSize(exp.summary, contentWidth);
    checkPageOverflow(expSumLines.length * 10);
    doc.text(expSumLines, margin, y);
    y += expSumLines.length * 10 + 4;

    // Contributions
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);

    exp.keyContributions.forEach((contrib) => {
      const contribText = `• ${contrib}`;
      const contribLines = doc.splitTextToSize(contribText, contentWidth - 10);
      checkPageOverflow(contribLines.length * 10);
      doc.text(contribLines, margin + 8, y);
      y += contribLines.length * 10 + 2;
    });

    y += 8;
  });

  // 6. EDUCATION & ADDITIONAL INFO
  renderSectionHeader('Education & Additional Details');
  checkPageOverflow(50);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);

  EDUCATION.forEach((edu) => {
    doc.text(`• ${edu.degree}`, margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(subtextColor[0], subtextColor[1], subtextColor[2]);
    doc.text(` — ${edu.institution} (${edu.year})`, margin + doc.getTextWidth(`• ${edu.degree}`), y);
    y += 12;
  });

  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);

  const addLines = [
    `Total Experience: 16 Years (12+ Years in Gaming Industry)`,
    `Specialization: 2D Game Art, Concept Art, Character Design, Animation & Rigging`,
    `Languages: ${PROFILE_DATA.languages.join(', ')}`,
  ];

  addLines.forEach((line) => {
    checkPageOverflow(12);
    doc.text(`• ${line}`, margin, y);
    y += 11;
  });

  // Trigger Save with direct Blob download fallback for iframe compatibility
  const fileName = `Sonali_Basak_Resume_${isDark ? 'Dark' : 'Light'}.pdf`;
  
  try {
    // Attempt standard jsPDF save
    doc.save(fileName);
  } catch (err) {
    console.warn('Standard save failed, attempting Blob download fallback:', err);
    try {
      const blob = doc.output('blob');
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      }, 1000);
    } catch (fallbackErr) {
      console.error('Blob download fallback error:', fallbackErr);
      // Final fallback: open data URI in new tab
      const dataUri = doc.output('datauristring');
      const win = window.open();
      if (win) {
        win.document.write(`<iframe src="${dataUri}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
      }
    }
  }
}
