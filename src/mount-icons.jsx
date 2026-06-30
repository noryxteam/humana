import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import {
  GlobeIcon,
  UsersIcon,
  HeartHandshakeIcon,
  LeafIcon,
  MonitorSmartphoneIcon,
  MapPinnedIcon,
  GraduationCapIcon,
  LanguagesIcon,
  HeadphonesIcon,
  PhoneIcon,
  MailIcon,
  MessageCircleIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  WhatsappIcon,
  HandshakeIcon,
  Building2Icon,
  AwardIcon,
  TargetIcon,
  StarIcon,
  ArrowRightIcon,
  UserPlusIcon,
  CalendarIcon,
  NewspaperIcon,
  ShieldIcon,
  ChevronDownIcon,
  ICON_SIZE,
  ICON_STROKE,
} from './components/icons';

const ICON_MAP = {
  globe: GlobeIcon,
  users: UsersIcon,
  'heart-handshake': HeartHandshakeIcon,
  leaf: LeafIcon,
  'monitor-smartphone': MonitorSmartphoneIcon,
  'map-pinned': MapPinnedIcon,
  'graduation-cap': GraduationCapIcon,
  languages: LanguagesIcon,
  headphones: HeadphonesIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  'message-circle': MessageCircleIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
  handshake: HandshakeIcon,
  'building-2': Building2Icon,
  award: AwardIcon,
  target: TargetIcon,
  star: StarIcon,
  'arrow-right': ArrowRightIcon,
  'user-plus': UserPlusIcon,
  calendar: CalendarIcon,
  newspaper: NewspaperIcon,
  shield: ShieldIcon,
  'chevron-down': ChevronDownIcon,
};

const SIZE_MAP = {
  sm: ICON_SIZE.sm,
  md: ICON_SIZE.md,
  lg: ICON_SIZE.lg,
  xl: ICON_SIZE.xl,
};

function resolveSize(node) {
  const preset = node.dataset.iconSize;
  if (preset && SIZE_MAP[preset]) {
    return SIZE_MAP[preset];
  }

  const numeric = Number.parseInt(node.dataset.iconSize || '', 10);
  return Number.isFinite(numeric) ? numeric : ICON_SIZE.md;
}

function mountIcons() {
  document.querySelectorAll('[data-icon]').forEach((node) => {
    if (node.dataset.iconMounted === 'true') {
      return;
    }

    const iconName = node.dataset.icon;
    const IconComponent = ICON_MAP[iconName];

    if (!IconComponent) {
      return;
    }

    const size = resolveSize(node);
    const strokeWidth = Number.parseFloat(node.dataset.iconStroke || '') || ICON_STROKE;
    const className = node.dataset.iconClass || '';
    const isBrandIcon = iconName === 'whatsapp';

    createRoot(node).render(
      createElement(IconComponent, {
        size,
        className,
        ...(isBrandIcon ? {} : { strokeWidth }),
      })
    );

    node.dataset.iconMounted = 'true';
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountIcons);
} else {
  mountIcons();
}
