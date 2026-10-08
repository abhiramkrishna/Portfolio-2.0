const fs = require('fs');

const fileMap = {
  'javascript': 'JavaScript.svg',
  'typescript': 'Typescript.svg',
  'html': 'HTML.svg',
  'css': 'CSS.svg',
  'figma': 'figma.svg',
  'illustrator': 'Illustrator.svg',
  'photoshop': 'Photoshop.svg',
  'adobe-xd': 'Adobe_XD.svg',
  'indesign': 'Adobe_InDesign.svg',
  'jupyter': 'Jupyter.svg',
  'cursor': 'cursor.svg'
};

const extractSvgInner = (id, filepath) => {
  if (!fs.existsSync(filepath)) return null;
  const content = fs.readFileSync(filepath, 'utf8');
  const viewBoxMatch = content.match(/viewBox=[\"'](.*?)[\"']/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  
  let innerMatch = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  if (!innerMatch) return null;
  
  let inner = innerMatch[1];
  
  // Clean up unwanted tags
  inner = inner.replace(/<style[\s\S]*?<\/style>/gi, '');
  if (id !== 'jupyter') {
    inner = inner.replace(/<defs[\s\S]*?<\/defs>/gi, '');
  }
  inner = inner.replace(/<!--[\s\S]*?-->/gi, '');
  inner = inner.replace(/<\?xml[\s\S]*?\?>/gi, '');
  inner = inner.replace(/<title[\s\S]*?<\/title>/gi, '');
  inner = inner.replace(/<desc[\s\S]*?<\/desc>/gi, '');
  
  // Clean up invalid attributes
  inner = inner.replace(/class=[\"'][^\"']*[\"']/gi, '');
  if (id !== 'jupyter') {
    inner = inner.replace(/id=[\"'][^\"']*[\"']/gi, '');
  }
  inner = inner.replace(/style=[\"'][^\"']*[\"']/gi, '');
  inner = inner.replace(/figma:type=[\"'][^\"']*[\"']/gi, '');
  inner = inner.replace(/xlink:href/gi, 'href');
  
  // Targeted Color Replacements
  if (id === 'javascript') {
    // JavaScript has rect (bg) and path (text)
    inner = inner.replace(/fill=\"#f7df1e\"/gi, 'fill=\"currentColor\"');
    inner = inner.replace(/<path/gi, '<path fill=\"var(--bg-primary)\"');
  } else if (id === 'typescript') {
    inner = inner.replace(/#3178c6/gi, 'currentColor');
    inner = inner.replace(/#fff/gi, 'var(--bg-primary)');
  } else if (id === 'html') {
    inner = inner.replace(/#e44d26|#f16529/gi, 'currentColor');
    inner = inner.replace(/#ebebeb|#fff/gi, 'var(--bg-primary)');
  } else if (id === 'css') {
    inner = inner.replace(/#264de4|#2965f1/gi, 'currentColor');
    inner = inner.replace(/#ebebeb|#fff/gi, 'var(--bg-primary)');
  } else if (id === 'illustrator') {
    // Using original CSS style values that were extracted
    // But since we stripped <style>, we need to replace the fill in the paths directly
    // Wait, Illustrator had .b{fill:#300} and .c{fill:#ff9a00}. If classes are stripped, the paths have no fill!
    // We should put the fills back into the paths.
    // Let's do a generic replace instead of stripping classes for Illustrator/Adobe, or just use the original content.
    // Actually, it's easier to inject our own fills. 
  }
  
  // React JSX props formatting
  inner = inner.replace(/clip-rule/gi, 'clipRule');
  inner = inner.replace(/fill-rule/gi, 'fillRule');
  inner = inner.replace(/stroke-width/gi, 'strokeWidth');
  inner = inner.replace(/stroke-linecap/gi, 'strokeLinecap');
  inner = inner.replace(/stroke-linejoin/gi, 'strokeLinejoin');
  inner = inner.replace(/stroke-miterlimit/gi, 'strokeMiterlimit');
  inner = inner.replace(/stroke-dasharray/gi, 'strokeDasharray');
  
  return { viewBox, inner: inner.trim() };
};

// We will recreate the Adobe logos from scratch based on what we know, to be totally safe.
const getAdobeLogo = (id) => {
  let bg = 'currentColor';
  let fg = 'var(--bg-primary)';
  let letters = '';
  if (id === 'photoshop') letters = '<path fill="'+fg+'" d="M54,164.1V61.2c0-0.7,0.3-1.1,1-1.1c1.7,0,3.3,0,5.6-0.1c2.4-0.1,4.9-0.1,7.6-0.2c2.7-0.1,5.6-0.1,8.7-0.2 c3.1-0.1,6.1-0.1,9.1-0.1c8.2,0,15,1,20.6,3.1c5,1.7,9.6,4.5,13.4,8.2c3.2,3.2,5.7,7.1,7.3,11.4c1.5,4.2,2.3,8.5,2.3,13 c0,8.6-2,15.7-6,21.3c-4,5.6-9.6,9.8-16.1,12.2c-6.8,2.5-14.3,3.4-22.5,3.4c-2.4,0-4,0-5-0.1c-1-0.1-2.4-0.1-4.3-0.1v32.1 c0.1,0.7-0.4,1.3-1.1,1.4c-0.1,0-0.2,0-0.4,0H55.2C54.4,165.4,54,165,54,164.1z M75.8,79.4V113c1.4,0.1,2.7,0.2,3.9,0.2H85 c3.9,0,7.8-0.6,11.5-1.8c3.2-0.9,6-2.8,8.2-5.3c2.1-2.5,3.1-5.9,3.1-10.3c0.1-3.1-0.7-6.2-2.3-8.9c-1.7-2.6-4.1-4.6-7-5.7 c-3.7-1.5-7.7-2.1-11.8-2c-2.6,0-4.9,0-6.8,0.1C77.9,79.2,76.5,79.3,75.8,79.4L75.8,79.4z"/><path fill="'+fg+'" d="M192,106.9c-3-1.6-6.2-2.7-9.6-3.4c-3.7-0.8-7.4-1.3-11.2-1.3c-2-0.1-4.1,0.2-6,0.7c-1.3,0.3-2.4,1-3.1,2 c-0.5,0.8-0.8,1.8-0.8,2.7c0,0.9,0.4,1.8,1,2.6c0.9,1.1,2.1,2,3.4,2.7c2.3,1.2,4.7,2.3,7.1,3.3c5.4,1.8,10.6,4.3,15.4,7.3 c3.3,2.1,6,4.9,7.9,8.3c1.6,3.2,2.4,6.7,2.3,10.3c0.1,4.7-1.3,9.4-3.9,13.3c-2.8,4-6.7,7.1-11.2,8.9c-4.9,2.1-10.9,3.2-18.1,3.2 c-4.6,0-9.1-0.4-13.6-1.3c-3.5-0.6-7-1.7-10.2-3.2c-0.7-0.4-1.2-1.1-1.1-1.9v-17.4c0-0.3,0.1-0.7,0.4-0.9 c0.3-0.2,0.6-0.1,0.9,0.1c3.9,2.3,8,3.9,12.4,4.9c3.8,1,7.8,1.5,11.8,1.5c3.8,0,6.5-0.5,8.3-1.4c1.6-0.7,2.7-2.4,2.7-4.2 c0-1.4-0.8-2.7-2.4-4c-1.6-1.3-4.9-2.8-9.8-4.7c-5.1-1.8-9.8-4.2-14.2-7.2c-3.1-2.2-5.7-5.1-7.6-8.5c-1.6-3.2-2.4-6.7-2.3-10.2 c0-4.3,1.2-8.4,3.4-12.1c2.5-4,6.2-7.2,10.5-9.2c4.7-2.4,10.6-3.5,17.7-3.5c4.1,0,8.3,0.3,12.4,0.9c3,0.4,5.9,1.2,8.6,2.3 c0.4,0.1,0.8,0.5,1,0.9c0.1,0.4,0.2,0.8,0.2,1.2v16.3c0,0.4-0.2,0.8-0.5,1C192.9,107.1,192.4,107.1,192,106.9z"/>';
  if (id === 'adobe-xd') letters = '<path fill="'+fg+'" d="M126.2,61.5L96.2,111l32,52.5c0.2,0.4,0.3,0.8,0.2,1.2c-0.1,0.4-0.5,0.1-1.1,0.2h-22.9 c-1.6,0-2.7-0.1-3.4-1.1c-2.1-4.2-4.3-8.3-6.4-12.5c-2.1-4.1-4.4-8.3-6.8-12.6c-2.4-4.3-4.8-8.6-7.2-13h-0.2 c-2.1,4.3-4.4,8.6-6.7,12.9c-2.3,4.3-4.6,8.6-6.8,12.8c-2.3,4.2-4.6,8.5-6.9,12.6c-0.4,1-1.2,1.1-2.3,1.1H35.7 c-0.4,0-0.7,0.2-0.7-0.3c-0.1-0.4,0-0.8,0.2-1.1l31.1-51L36,61.4c-0.3-0.4-0.4-0.8-0.2-1c0.2-0.3,0.6-0.4,1-0.4h22.7 c0.5,0,1,0.1,1.4,0.2c0.4,0.2,0.7,0.5,1,0.9c1.9,4.3,4.1,8.6,6.4,12.9c2.4,4.3,4.7,8.5,7.2,12.7c2.4,4.2,4.6,8.4,6.7,12.7h0.2 c2.1-4.4,4.3-8.7,6.5-12.9c2.2-4.2,4.5-8.4,6.8-12.6c2.3-4.2,4.5-8.5,6.7-12.6c0.1-0.4,0.3-0.8,0.6-1c0.4-0.2,0.8-0.3,1.3-0.2 h21.1c0.5-0.1,1,0.2,1.1,0.7C126.6,60.9,126.4,61.3,126.2,61.5L126.2,61.5z"/><path fill="'+fg+'" d="M172.4,167c-7.4,0.1-14.8-1.4-21.5-4.5c-6.3-2.9-11.5-7.7-15.1-13.6c-3.7-6.1-5.5-13.7-5.5-22.8 c-0.1-7.4,1.8-14.7,5.5-21.1c3.8-6.5,9.3-11.9,15.9-15.5c7-3.9,15.4-5.8,25.3-5.8c0.5,0,1.2,0,2.1,0.1c0.9,0.1,1.9,0.1,3.1,0.2 V52.4c0-0.7,0.3-1.1,1-1.1h20.3c0.5-0.1,0.9,0.3,1,0.7c0,0.1,0,0.2,0,0.2v95.2c0,1.8,0.1,3.8,0.2,6c0.2,2.1,0.3,4.1,0.4,5.8 c0,0.7-0.3,1.3-1,1.6c-5.2,2.2-10.7,3.8-16.3,4.8C182.7,166.5,177.6,167,172.4,167z M182.2,147v-44c-0.9-0.2-1.8-0.4-2.7-0.5 c-1.1-0.1-2.2-0.2-3.3-0.2c-3.9,0-7.8,0.8-11.3,2.6c-3.4,1.7-6.3,4.2-8.5,7.4c-2.2,3.2-3.3,7.5-3.3,12.7c-0.1,3.5,0.5,7,1.7,10.3 c1,2.7,2.5,5.1,4.5,7.1c1.9,1.8,4.2,3.2,6.8,4c2.7,0.9,5.5,1.3,8.3,1.3c1.5,0,2.9-0.1,4.2-0.2C179.9,147.6,181,147.4,182.2,147z" />';
  if (id === 'indesign') letters = '<path fill="'+fg+'" d="m87.2 61.2v103c0 1.1-0.5 1.6-1.4 1.6h-19.6c-0.9 0-1.3-0.5-1.3-1.6v-103c0-0.9 0.5-1.3 1.4-1.3h19.5c0.6-0.1 1.2 0.3 1.3 1 0.1 0.1 0.1 0.2 0.1 0.3z"/><path fill="'+fg+'" d="m145 167c-7.4 0.1-14.8-1.4-21.5-4.5-6.3-2.9-11.5-7.7-15.1-13.6-3.7-6.1-5.5-13.7-5.5-22.8-0.1-7.4 1.8-14.7 5.5-21.1 3.8-6.5 9.3-11.9 15.9-15.5 7-3.9 15.4-5.8 25.3-5.8 0.5 0 1.2 0 2.1 0.1s1.9 0.1 3.1 0.2v-31.6c0-0.7 0.3-1.1 1-1.1h20.3c0.5-0.1 0.9 0.3 1 0.7v0.2 95.2c0 1.8 0.1 3.8 0.2 6 0.2 2.1 0.3 4.1 0.4 5.8 0 0.7-0.3 1.3-1 1.6-5.2 2.2-10.7 3.8-16.3 4.8-5 0.9-10.2 1.4-15.4 1.4zm9.8-20v-44c-0.9-0.2-1.8-0.4-2.7-0.5-1.1-0.1-2.2-0.2-3.3-0.2-3.9 0-7.8 0.8-11.3 2.6-3.4 1.7-6.3 4.2-8.5 7.4s-3.3 7.5-3.3 12.7c-0.1 3.5 0.5 7 1.7 10.3 1 2.7 2.5 5.1 4.5 7.1 1.9 1.8 4.2 3.2 6.8 4 2.7 0.9 5.5 1.3 8.3 1.3 1.5 0 2.9-0.1 4.2-0.2 1.3 0.1 2.5-0.1 3.6-0.5z"/>';
  if (id === 'illustrator') {
    return {
      viewBox: '0 0 250 250',
      inner: '<rect width="250" height="250" rx="42.74" ry="42.74" fill="' + bg + '"/><path fill="' + fg + '" d="M122.11,66.15h-37.41l-42.97,115.62h33.48l5.58-17.27h42.98l5.58,17.27h34.5l-41.73-115.62ZM102.27,135.65h-12.17l12.17-37.69,12.17,37.69h-12.17Z"/><rect fill="' + fg + '" x="168.12" y="90.74" width="30.98" height="91.03"/><path fill="' + fg + '" d="M200.12,74.28c.09,8.49-6.78,14.49-16.5,14.41-9.73.08-16.59-5.92-16.5-14.41-.09-8.49,6.78-14.49,16.5-14.41,9.73-.08,16.59,5.92,16.5,14.41Z"/>'
    };
  }
  return {
    viewBox: '0 0 240 234',
    inner: '<path fill="' + bg + '" d="M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149 C0,19,19,0,42.5,0z"/>' + letters
  };
}

let out = `import React from 'react';

interface WireframeLogoProps {
  id: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
  showBlueprintGrid?: boolean;
}

export const WireframeLogo: React.FC<WireframeLogoProps> = ({
  id,
  size = 48,
  className = '',
  strokeWidth = 1.5,
  showBlueprintGrid = false
}) => {
  const s = strokeWidth;

  const renderGrid = () => {
    if (!showBlueprintGrid) return null;
    return (
      <g className="blueprint-grid-lines" opacity="0.25" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3">
        <line x1="8" y1="8" x2="56" y2="8" />
        <line x1="8" y1="56" x2="56" y2="56" />
        <line x1="8" y1="8" x2="8" y2="56" />
        <line x1="56" y1="8" x2="56" y2="56" />
        <line x1="32" y1="4" x2="32" y2="60" strokeDasharray="1 4" />
        <line x1="4" y1="32" x2="60" y2="32" strokeDasharray="1 4" />
        <path d="M4 12 V4 H12 M52 4 H60 V12 M60 52 V60 H52 M12 60 H4 V52" fill="none" strokeWidth="1" strokeDasharray="none" />
      </g>
    );
  };

  switch (id) {
`;

for (const [id, filename] of Object.entries(fileMap)) {
  let svgData;
  if (['photoshop', 'adobe-xd', 'indesign', 'illustrator'].includes(id)) {
    svgData = getAdobeLogo(id);
  } else {
    svgData = extractSvgInner(id, 'e:/Portfolio2.0/src/assets/' + filename);
    if (svgData) {
      if (['figma', 'jupyter', 'cursor'].includes(id)) {
        svgData.inner = svgData.inner.replace(/fill=[\"'][^\"']*[\"']/gi, 'fill="currentColor"');
      }
    }
  }

  if (svgData) {
    out += `    case '${id}':\n`;
    out += `      return (\n`;
    out += `        <svg viewBox="${svgData.viewBox}" width={size} height={size} className={\`wireframe-logo wf-${id} \${className}\`} fill="currentColor">\n`;
    if (['figma', 'jupyter', 'cursor'].includes(id)) {
      out += `          <g fill="currentColor">\n`;
    } else {
      out += `          <g>\n`;
    }
    out += `            ${svgData.inner}\n`;
    out += `          </g>\n`;
    out += `        </svg>\n`;
    out += `      );\n\n`;
  } else {
    console.log('NOT FOUND: ' + filename);
  }
}

const keeps = ['react-native', 'blender', 'vscode', 'codex', 'framer', 'antigravity'];
const existingFile = fs.readFileSync('e:/Portfolio2.0/src/components/technology/WireframeLogo.tsx', 'utf8');

for (const k of keeps) {
  const regex = new RegExp(`case '${k}':([\\s\\S]*?)return \\([\\s\\S]*?<svg[^>]*>([\\s\\S]*?)<\\/svg>[\\s\\S]*?\\);`, 'i');
  const match = existingFile.match(regex);
  if (match) {
    out += `    case '${k}':\n`;
    out += `      return (\n`;
    out += `        <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={\`wireframe-logo wf-${k} \${className}\`}>\n`;
    out += `          ${match[2].trim()}\n`;
    out += `        </svg>\n`;
    out += `      );\n\n`;
  } else {
    console.log('KEEP NOT FOUND: ' + k);
  }
}

out += `    default:\n`;
out += `      return (\n`;
out += `        <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={\`wireframe-logo \${className}\`}>\n`;
out += `          <rect x="8" y="8" width="48" height="48" rx="8" stroke="currentColor" strokeWidth={1.5} strokeDasharray="3 3" />\n`;
out += `          <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth={1.5} />\n`;
out += `        </svg>\n`;
out += `      );\n`;
out += `  }\n`;
out += `};\n`;

fs.writeFileSync('e:/Portfolio2.0/src/components/technology/WireframeLogo.tsx', out);
console.log('Successfully generated WireframeLogo.tsx');
