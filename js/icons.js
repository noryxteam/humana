/**
 * Ícones SVG — montagem direta sem React
 */
(function () {
  'use strict';

  var SIZES = { sm: 20, md: 24, lg: 32, xl: 40 };
  var STROKE = 1.75;
  var SVG_NS = 'http://www.w3.org/2000/svg';

  var ICONS = {
    'arrow-right': [
      ['path', { d: 'M5 12h14' }],
      ['path', { d: 'm12 5 7 7-7 7' }],
    ],
    award: [
      ['path', { d: 'm15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526' }],
      ['circle', { cx: '12', cy: '8', r: '6' }],
    ],
    'building-2': [
      ['path', { d: 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z' }],
      ['path', { d: 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2' }],
      ['path', { d: 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2' }],
      ['path', { d: 'M10 6h4' }],
      ['path', { d: 'M10 10h4' }],
      ['path', { d: 'M10 14h4' }],
      ['path', { d: 'M10 18h4' }],
    ],
    calendar: [
      ['path', { d: 'M8 2v4' }],
      ['path', { d: 'M16 2v4' }],
      ['rect', { width: '18', height: '18', x: '3', y: '4', rx: '2' }],
      ['path', { d: 'M3 10h18' }],
    ],
    clock: [
      ['circle', { cx: '12', cy: '12', r: '10' }],
      ['polyline', { points: '12 6 12 12 16 14' }],
    ],
    'chevron-down': [['path', { d: 'm6 9 6 6 6-6' }]],
    flag: [
      ['path', { d: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' }],
      ['line', { x1: '4', x2: '4', y1: '22', y2: '15' }],
    ],
    facebook: [
      ['path', { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' }],
    ],
    'file-text': [
      ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' }],
      ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4' }],
      ['path', { d: 'M10 9H8' }],
      ['path', { d: 'M16 13H8' }],
      ['path', { d: 'M16 17H8' }],
    ],
    'file-up': [
      ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' }],
      ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4' }],
      ['path', { d: 'M12 12v6' }],
      ['path', { d: 'm9 15 3-3 3 3' }],
    ],
    globe: [
      ['circle', { cx: '12', cy: '12', r: '10' }],
      ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' }],
      ['path', { d: 'M2 12h20' }],
    ],
    'graduation-cap': [
      ['path', { d: 'M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z' }],
      ['path', { d: 'M22 10v6' }],
      ['path', { d: 'M6 12.5V16a6 3 0 0 0 12 0v-3.5' }],
    ],
    handshake: [
      ['path', { d: 'm11 17 2 2a1 1 0 1 0 3-3' }],
      ['path', { d: 'm14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4' }],
      ['path', { d: 'm21 3 1 11h-2' }],
      ['path', { d: 'M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3' }],
      ['path', { d: 'M3 4h8' }],
    ],
    headphones: [
      ['path', { d: 'M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3' }],
    ],
    'heart-handshake': [
      ['path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' }],
      ['path', { d: 'M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66' }],
      ['path', { d: 'm18 15-2-2' }],
      ['path', { d: 'm15 18-2-2' }],
    ],
    instagram: [
      ['rect', { width: '20', height: '20', x: '2', y: '2', rx: '5', ry: '5' }],
      ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }],
      ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5' }],
    ],
    languages: [
      ['path', { d: 'm5 8 6 6' }],
      ['path', { d: 'm4 14 6-6 2-3' }],
      ['path', { d: 'M2 5h12' }],
      ['path', { d: 'M7 2h1' }],
      ['path', { d: 'm22 22-5-10-5 10' }],
      ['path', { d: 'M14 18h6' }],
    ],
    leaf: [
      ['path', { d: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z' }],
      ['path', { d: 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12' }],
    ],
    lock: [
      ['rect', { width: '18', height: '11', x: '3', y: '11', rx: '2', ry: '2' }],
      ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' }],
    ],
    linkedin: [
      ['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }],
      ['rect', { width: '4', height: '12', x: '2', y: '9' }],
      ['circle', { cx: '4', cy: '4', r: '2' }],
    ],
    mail: [
      ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' }],
      ['rect', { x: '2', y: '4', width: '20', height: '16', rx: '2' }],
    ],
    'maximize-2': [
      ['polyline', { points: '15 3 21 3 21 9' }],
      ['polyline', { points: '9 21 3 21 3 15' }],
      ['line', { x1: '21', x2: '14', y1: '3', y2: '10' }],
      ['line', { x1: '3', x2: '10', y1: '21', y2: '14' }],
    ],
    messages: [
      ['path', { d: 'M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5Z' }],
      ['path', { d: 'M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1' }],
    ],
    mic: [
      ['path', { d: 'M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z' }],
      ['path', { d: 'M19 10v2a7 7 0 0 1-14 0v-2' }],
      ['line', { x1: '12', x2: '12', y1: '19', y2: '22' }],
    ],
    'map-pinned': [
      ['path', { d: 'M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0' }],
      ['circle', { cx: '12', cy: '8', r: '2' }],
      ['path', { d: 'M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712' }],
    ],
    'message-circle': [['path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z' }]],
    'monitor-smartphone': [
      ['path', { d: 'M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8' }],
      ['path', { d: 'M10 19v-3.96 3.15' }],
      ['path', { d: 'M7 19h5' }],
      ['rect', { width: '6', height: '10', x: '16', y: '12', rx: '2' }],
    ],
    newspaper: [
      ['path', { d: 'M15 18h-5' }],
      ['path', { d: 'M18 14h-8' }],
      ['path', { d: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2' }],
      ['rect', { width: '8', height: '4', x: '10', y: '6', rx: '1' }],
    ],
    paperclip: [
      ['path', { d: 'm21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48' }],
    ],
    phone: [
      ['path', { d: 'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384' }],
    ],
    rocket: [
      ['path', { d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' }],
      ['path', { d: 'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' }],
      ['path', { d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' }],
      ['path', { d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' }],
    ],
    send: [
      ['path', { d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z' }],
      ['path', { d: 'm21.854 2.147-10.94 10.939' }],
    ],
    'share-2': [
      ['circle', { cx: '18', cy: '5', r: '3' }],
      ['circle', { cx: '6', cy: '12', r: '3' }],
      ['circle', { cx: '18', cy: '19', r: '3' }],
      ['line', { x1: '8.59', x2: '15.41', y1: '13.51', y2: '17.49' }],
      ['line', { x1: '15.41', x2: '8.59', y1: '6.51', y2: '10.49' }],
    ],
    shield: [
      ['path', { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' }],
    ],
    star: [
      ['path', { d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' }],
    ],
    target: [
      ['circle', { cx: '12', cy: '12', r: '10' }],
      ['circle', { cx: '12', cy: '12', r: '6' }],
      ['circle', { cx: '12', cy: '12', r: '2' }],
    ],
    user: [
      ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }],
      ['circle', { cx: '12', cy: '7', r: '4' }],
    ],
    'user-plus': [
      ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }],
      ['circle', { cx: '9', cy: '7', r: '4' }],
      ['line', { x1: '19', x2: '19', y1: '8', y2: '14' }],
      ['line', { x1: '22', x2: '16', y1: '11', y2: '11' }],
    ],
    users: [
      ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }],
      ['path', { d: 'M16 3.128a4 4 0 0 1 0 7.744' }],
      ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }],
      ['circle', { cx: '9', cy: '7', r: '4' }],
    ],
    wifi: [
      ['path', { d: 'M12 20h.01' }],
      ['path', { d: 'M2 8.82a15 15 0 0 1 20 0' }],
      ['path', { d: 'M5 12.429a10 10 0 0 1 14 0' }],
      ['path', { d: 'M8.5 16.429a5 5 0 0 1 7 0' }],
    ],
    youtube: [
      ['path', { d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' }],
      ['path', { d: 'm10 15 5-3-5-3z' }],
    ],
  };

  var WHATSAPP_PATH =
    'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z';

  function resolveSize(node) {
    var preset = node.dataset.iconSize;
    if (preset && SIZES[preset]) {
      return SIZES[preset];
    }
    var numeric = Number.parseInt(node.dataset.iconSize || '', 10);
    return Number.isFinite(numeric) ? numeric : SIZES.md;
  }

  function createLucideIcon(name, size, strokeWidth, className) {
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('width', String(size));
    svg.setAttribute('height', String(size));
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', String(strokeWidth));
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('class', ('humana-icon ' + (className || '')).trim());
    svg.setAttribute('aria-hidden', 'true');

    ICONS[name].forEach(function (item) {
      var el = document.createElementNS(SVG_NS, item[0]);
      Object.keys(item[1]).forEach(function (key) {
        el.setAttribute(key, item[1][key]);
      });
      svg.appendChild(el);
    });

    return svg;
  }

  function createWhatsappIcon(size, className) {
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('width', String(size));
    svg.setAttribute('height', String(size));
    svg.setAttribute('viewBox', '0 0 448 512');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('class', ('humana-icon humana-icon--brand ' + (className || '')).trim());
    svg.setAttribute('aria-hidden', 'true');

    var path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', WHATSAPP_PATH);
    svg.appendChild(path);

    return svg;
  }

  function mountIcons() {
    document.querySelectorAll('[data-icon]').forEach(function (node) {
      if (node.dataset.iconMounted === 'true') {
        return;
      }

      var name = node.dataset.icon;
      var size = resolveSize(node);
      var strokeWidth = Number.parseFloat(node.dataset.iconStroke || '') || STROKE;
      var className = node.dataset.iconClass || '';
      var icon = null;

      if (name === 'whatsapp') {
        icon = createWhatsappIcon(size, className);
      } else if (ICONS[name]) {
        icon = createLucideIcon(name, size, strokeWidth, className);
      }

      if (!icon) {
        return;
      }

      node.textContent = '';
      node.appendChild(icon);
      node.dataset.iconMounted = 'true';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountIcons);
  } else {
    mountIcons();
  }

  window.HumanaIcons = { mount: mountIcons };
})();
