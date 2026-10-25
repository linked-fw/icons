import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  AlertCircle,
  AlertTriangle,
  Archive,
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  BadgeCheck,
  ShieldCheck,
  BarChart2,
  Blocks,
  Bookmark,
  BookmarkCheck,
  Box,
  Boxes,
  Check as LucideCheck,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsLeftRight,
  ChevronsRight,
  ChevronUp,
  Circle,
  Clock,
  Cloud,
  Code,
  Component,
  Copy,
  CornerDownRight,
  CornerUpLeft,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileCode,
  FileEdit,
  FileText,
  Folder,
  FolderPlus,
  Gamepad2,
  GitBranch,
  GitCompare,
  Globe,
  GripVertical,
  HelpCircle,
  History,
  Inbox,
  Info,
  Italic,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  Link2,
  List,
  ListFilter,
  Loader2,
  Lock,
  LogOut,
  Maximize,
  Menu,
  MessageSquare,
  Minimize2,
  Minus,
  Monitor,
  Moon,
  MoreHorizontal,
  Network,
  Package,
  Pencil,
  PieChart,
  Play,
  Plus,
  RefreshCw,
  Rocket,
  RotateCcw,
  Save,
  Search,
  Settings,
  Shapes,
  Share2,
  Sparkles,
  Split,
  Star,
  Sun,
  Tag,
  ThumbsDown,
  ThumbsUp,
  Trash2,
  Type,
  Upload,
  User,
  UserPlus,
  Users,
  X,
  Calendar as LucideCalendar,
  Table2,
  PlusCircle,
  ChevronsUpDown,
} from 'lucide-react';

import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

/**
 * Wraps a lucide icon so it keeps the `width` / `height` props (default 15) the hand-drawn
 * arrow and close icons took, next to lucide's own `size`, `color` and `className`.
 */
const sized =
  (Icon: ComponentType<LucideProps>) =>
  ({ width = '15', height = '15', ...props }: LucideProps) => (
    <Icon width={width} height={height} {...props} />
  );

export const Icons = {
  ShieldCheck,
  UserPlus,
  Users,
  Network,
  Menu,
  Search,
  Italic,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Pencil,
  ListFilter,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronsLeftRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  Settings,
  Trash: Trash2,
  Trash2,
  ArrowLeft,
  ArrowRight,
  Box,
  Copy,
  Globe,
  Cross2: X,
  // Ontology Explorer icons
  Database,
  Bookmark,
  BookmarkCheck,
  Star,
  Layers,
  Verified: CheckCircle2,
  HelpCircle,
  Code,
  Cloud,
  Compare: ArrowLeftRight,
  Rocket,
  MoreHorizontal,
  GitBranch,
  Plus,
  Sparkles,
  LayoutDashboard,
  // Chat/feedback icons
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Check: ({
    color = 'currentColor',
    width = '15',
    height = '15',
    ...props
  }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  CheckLucide: LucideCheck,
  // Theme icons
  Sun,
  Moon,
  Monitor,
  // Phase 2 - Types Explorer icons
  Type,
  List,
  Grid: LayoutGrid,
  Clock,
  Link: Link2,
  ExternalLink,
  Info,
  AlertCircle,
  Boxes,
  Loader: Loader2,
  // Browser component icons
  Tag,
  BarChart2,
  Play,
  Folder,
  FolderPlus,
  // Detail panel icons
  X,
  ArrowUp,
  AlertTriangle,
  CornerDownRight,
  RefreshCw,
  RotateCcw,
  Save,
  Upload,
  Minus,
  Minimize2,
  Lock,
  FileEdit,
  // Model Manager icons
  Gamepad2,
  FileCode,
  FileText,
  Shapes,
  Package,
  // Package type icons
  Blocks,
  Component,
  // Ontology Editor icons
  Archive,
  LogOut,
  // Versioning icons
  Edit: Pencil,
  Download,
  User,
  History,
  Inbox,
  // Ontology Explorer visualization icons
  PieChart,
  // Shape Builder icons
  GripVertical,
  CheckCircle,
  Share2,
  Circle,
  Maximize,
  Split,
  CornerUpLeft,
  CreateNow: ({ width = '554', height = '116', className, ...props }: { width?: string; height?: string; className?: string; [key: string]: any }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 553.75 115.51"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <style>
          {`.cn-primary { fill: var(--color-primary-500, #116d8d); }
          .cn-secondary { fill: var(--color-secondary-500, #7ac9a7); }
          .cn-tertiary { fill: var(--color-tertiary-500, #00a8b8); }`}
        </style>
      </defs>
      <g>
        {/* CREATE text */}
        <path
          className="cn-primary"
          d="M165.81,38.69l-2.09,5.29c-2-1.44-5.14-2.16-9.43-2.16-4.02,0-7.24,1.71-9.67,5.13-2.43,3.42-3.64,7.84-3.64,13.24s1.24,9.34,3.73,12.54c2.49,3.21,5.7,4.81,9.64,4.81,4.29,0,7.59-1.5,9.9-4.51l3.44,4.73c-3.62,3.57-8.29,5.35-13.99,5.35s-10.68-2.13-14.12-6.4c-3.44-4.27-5.15-9.9-5.15-16.89s1.83-12.38,5.5-16.86c3.67-4.47,8.4-6.71,14.21-6.71,4.98,0,8.87.81,11.68,2.44Z"
        />
        <path
          className="cn-primary"
          d="M200.27,82.33l-12.21-19.45c-1.4,0-3.6-.1-6.62-.31v19.76h-6.25v-45.31c.23,0,1.85-.08,4.86-.23,3.01-.15,5.2-.23,6.58-.23,11,0,16.49,4.33,16.49,12.99,0,2.85-.89,5.41-2.66,7.69s-3.87,3.7-6.31,4.25l13.28,20.85h-7.15ZM181.43,42.59v14.72c1.5.21,2.96.31,4.37.31,3.75,0,6.48-.6,8.18-1.79,1.71-1.2,2.56-3.33,2.56-6.4,0-2.54-.92-4.36-2.75-5.47-1.83-1.11-4.73-1.67-8.68-1.67-.62,0-1.85.1-3.69.31Z"
        />
        <path
          className="cn-primary"
          d="M218.35,42.59v12.59h15.12v5.26h-15.12v16.33h20.74v5.57h-26.99v-45.31h27.33v5.57h-21.08Z"
        />
        <path
          className="cn-primary"
          d="M272.36,82.33l-3.15-9.56h-17.02l-3.37,9.56h-7l18.59-45.93h1.66l17.24,45.93h-6.94ZM260.93,48.28l-7.09,19.95h13.59l-6.5-19.95Z"
        />
        <path
          className="cn-primary"
          d="M294.58,42.59v39.74h-6.25v-39.74h-14.56v-5.57h36.02v5.57h-15.21Z"
        />
        <path
          className="cn-primary"
          d="M321.28,42.59v12.59h15.12v5.26h-15.12v16.33h20.74v5.57h-26.99v-45.31h27.33v5.57h-21.08Z"
        />
        <path
          className="cn-tertiary"
          d="M355.67,73.64c1.29,0,2.39.46,3.31,1.36.92.91,1.38,2,1.38,3.28s-.46,2.38-1.38,3.29c-.92.92-2.02,1.38-3.31,1.38s-2.39-.46-3.31-1.38c-.92-.92-1.37-2.02-1.37-3.29s.46-2.37,1.37-3.28c.92-.91,2.02-1.36,3.31-1.36Z"
        />

        {/* NOW text */}
        <path
          className="cn-tertiary"
          d="M408.01,82.97l-30.9-33.12v32.5h-7.76v-45.31h3.27l30.09,31.33v-31.33h7.76v45.93h-2.45Z"
        />
        <path
          className="cn-tertiary"
          d="M419.85,59.31c0-6.56,2.17-12.04,6.51-16.45,4.34-4.41,10.2-6.62,17.58-6.62,8.3,0,14.66,2.03,19.08,6.09,4.42,4.06,6.63,9.72,6.63,16.98s-2.22,13.27-6.65,17.49c-4.44,4.22-10.79,6.32-19.07,6.32-7.54,0-13.44-2.23-17.7-6.68-4.26-4.45-6.39-10.17-6.39-17.13ZM428.43,59.31c0,5.2,1.35,9.54,4.06,13.02s6.52,5.23,11.45,5.23c5.58,0,9.83-1.6,12.76-4.79,2.92-3.2,4.39-7.68,4.39-13.45,0-11.67-5.72-17.5-17.15-17.5-5.06,0-8.91,1.57-11.55,4.7-2.64,3.13-3.96,7.4-3.96,12.8Z"
        />
        <path
          className="cn-tertiary"
          d="M525.02,82.97h-2.57l-14.25-31.24-13.31,31.24h-2.57l-18.86-45.93h8.49l12,31.64,13.14-31.64h2.86l12.98,31.58,12.21-31.58h8.49l-18.62,45.93Z"
        />

        {/* Icon - Complex geometric pattern */}
        <g>
          <path
            className="cn-tertiary"
            d="M8.02,50.82c2.98-1.81,12.44-7.27,14.16-8.29,1.02-.61,1.93-.66,3.03,0,4.67,2.79,9.38,5.55,14.08,8.29.11.06.68.34.68.61s-.44.27-.65.27c-10.42,0-20.84,0-31.26,0-.21,0-.7-.04-.7-.27s.42-.46.66-.61Z"
          />
          <path
            className="cn-tertiary"
            d="M8.02,55.91c2.98,1.81,12.44,7.27,14.16,8.29,1.02.61,1.93.66,3.03,0,4.67-2.79,9.38-5.55,14.08-8.29.11-.06.68-.34.68-.61s-.44-.27-.65-.27c-10.42,0-20.84,0-31.26,0-.21,0-.7.04-.7.27s.42.46.66.61Z"
          />
        </g>
        <g>
          <path
            className="cn-tertiary"
            d="M29.42,18.93c3.06,1.68,12.51,7.14,14.25,8.12,1.04.58,1.54,1.34,1.51,2.62-.08,5.44-.11,10.9-.13,16.34,0,.13.04.76-.19.89s-.45-.25-.56-.43c-5.22-9.02-10.43-18.04-15.63-27.07-.1-.18-.31-.63-.12-.74s.61.13.86.27Z"
          />
          <path
            className="cn-tertiary"
            d="M25.01,21.48c-.08,3.49-.07,14.4-.1,16.4-.02,1.19.39,2,1.51,2.62,4.75,2.65,9.49,5.35,14.22,8.05.11.07.64.41.87.28s.01-.52-.09-.7c-5.2-9.03-10.41-18.05-15.63-27.07-.1-.18-.39-.58-.58-.47s-.19.6-.2.88Z"
          />
        </g>
        <g>
          <path
            className="cn-tertiary"
            d="M29.42,87.72c3.06-1.68,12.51-7.14,14.25-8.12,1.04-.58,1.54-1.34,1.51-2.62-.08-5.44-.11-10.9-.13-16.34,0-.13.04-.76-.19-.89s-.45.25-.56.43c-5.22,9.02-10.43,18.04-15.63,27.07-.1.18-.31.63-.12.74s.61-.13.86-.27Z"
          />
          <path
            className="cn-tertiary"
            d="M25.01,85.18c-.08-3.49-.07-14.4-.1-16.4-.02-1.19.39-2,1.51-2.62,4.75-2.65,9.49-5.35,14.22-8.05.11-.07.64-.41.87-.28s.01.52-.09.7c-5.2,9.03-10.41,18.05-15.63,27.07-.1.18-.39.58-.58.47s-.19-.6-.2-.88Z"
          />
        </g>
        <g>
          <path
            className="cn-tertiary"
            d="M85.39,50.82c-2.98-1.81-12.44-7.27-14.16-8.29-1.02-.61-1.93-.66-3.03,0-4.67,2.79-9.38,5.55-14.08,8.29-.11.06-.68.34-.68.61s.44.27.65.27c10.42,0,20.84,0,31.26,0,.21,0,.7-.04.7-.27s-.42-.46-.66-.61Z"
          />
          <path
            className="cn-tertiary"
            d="M85.39,55.91c-2.98,1.81-12.44,7.27-14.16,8.29-1.02.61-1.93.66-3.03,0-4.67-2.79-9.38-5.55-14.08-8.29-.11-.06-.68-.34-.68-.61s.44-.27.65-.27c10.42,0,20.84,0,31.26,0,.21,0,.7.04.7.27s-.42.46-.66.61Z"
          />
        </g>
        <g>
          <path
            className="cn-tertiary"
            d="M64,18.93c-3.06,1.68-12.51,7.14-14.25,8.12-1.04.58-1.54,1.34-1.51,2.62.08,5.44.11,10.9.13,16.34,0,.13-.04.76.19.89s.45-.25.56-.43c5.22-9.02,10.43-18.04,15.63-27.07.1-.18.31-.63.12-.74s-.61.13-.86.27Z"
          />
          <path
            className="cn-tertiary"
            d="M68.41,21.48c.08,3.49.07,14.4.1,16.4.02,1.19-.39,2-1.51,2.62-4.75,2.65-9.49,5.35-14.22,8.05-.11.07-.64.41-.87.28s-.01.52.09-.7c5.2-9.03,10.41-18.05,15.63-27.07.1-.18.39-.58.58-.47s.19.6.2.88Z"
          />
        </g>
        <g>
          <path
            className="cn-tertiary"
            d="M64,87.72c-3.06-1.68-12.51-7.14-14.25-8.12-1.04-.58-1.54-1.34-1.51-2.62.08-5.44.11-10.9.13-16.34,0-.13-.04-.76.19-.89s.45.25.56.43c5.22,9.02,10.43,18.04,15.63,27.07.1.18.31.63.12.74s-.61-.13-.86-.27Z"
          />
          <path
            className="cn-tertiary"
            d="M68.41,85.18c.08-3.49.07-14.4.1-16.4.02-1.19-.39-2-1.51-2.62-4.75-2.65-9.49-5.35-14.22-8.05-.11-.07-.64-.41-.87-.28s-.01.52.09.7c5.2,9.03,10.41,18.05,15.63,27.07.1.18.39.58.58.47s.19-.6.2-.88Z"
          />
        </g>
        <g>
          <path
            className="cn-secondary"
            d="M30.94,10.91c2.98-1.81,12.44-7.27,14.16-8.29,1.02-.61,1.93-.66,3.03,0,4.67,2.79,9.38,5.55,14.08,8.29.11.06.68.34.68.61s-.44.27-.65.27c-10.42,0-20.84,0-31.26,0-.21,0-.7-.04-.7-.27s.42-.46.66-.61Z"
          />
          <path
            className="cn-primary"
            d="M30.94,16.01c2.98,1.81,12.44,7.27,14.16,8.29,1.02.61,1.93.66,3.03,0,4.67-2.79,9.38-5.55,14.08-8.29.11-.06.68-.34.68-.61s-.44-.27-.65-.27c-10.42,0-20.84,0-31.26,0-.21,0-.7.04-.7.27s.42.46.66.61Z"
          />
        </g>
        <g>
          <path
            className="cn-secondary"
            d="M30.94,96.09c2.98,1.81,12.44,7.27,14.16,8.29,1.02.61,1.93.66,3.03,0,4.67-2.79,9.38-5.55,14.08-8.29.11-.06.68-.34.68-.61s-.44-.27-.65-.27c-10.42,0-20.84,0-31.26,0-.21,0-.7.04-.7.27s.42.46.66.61Z"
          />
          <path
            className="cn-primary"
            d="M30.94,90.99c2.98-1.81,12.44-7.27,14.16-8.29,1.02-.61,1.93-.66,3.03,0,4.67,2.79,9.38,5.55,14.08,8.29.11-.06.68-.34.68-.61s-.44.27-.65.27c-10.42,0-20.84,0-31.26,0-.21,0-.7-.04-.7-.27s.42-.46.66-.61Z"
          />
        </g>
        <g>
          <path
            className="cn-secondary"
            d="M75.65,18.49c3.06,1.68,12.51,7.14,14.25,8.12,1.04.58,1.54,1.34,1.51,2.62-.08,5.44-.11,10.9-.14,16.34,0,.13.04.76-.19.89s-.45-.25-.56-.43c-5.22-9.02-10.43-18.04-15.63-27.07-.1-.18-.31-.63-.12-.74s.61.13.86.27Z"
          />
          <path
            className="cn-primary"
            d="M71.24,21.05c-.08,3.49-.07,14.4-.1,16.4-.02,1.19.39,2,1.51,2.62,4.75,2.65,9.49,5.35,14.22,8.05.11.07.64.41.87.28s.01-.52-.09-.7c-5.2-9.03-10.41-18.05-15.63-27.07-.1-.18-.39-.58-.58-.47s-.19.6-.2.88Z"
          />
        </g>
        <g>
          <path
            className="cn-secondary"
            d="M75.65,88.16c3.06-1.68,12.51-7.14,14.25-8.12,1.04-.58,1.54-1.34,1.51-2.62-.08-5.44-.11-10.9-.14-16.34,0-.13.04-.76-.19-.89s-.45.25-.56.43c-5.22,9.02-10.43,18.04-15.63,27.07-.1.18-.31.63-.12.74s.61-.13.86-.27Z"
          />
          <path
            className="cn-primary"
            d="M71.24,85.6c-.08-3.49-.07-14.4-.1-16.4-.02-1.19.39-2,1.51-2.62,4.75-2.65,9.49-5.35,14.22-8.05.11-.07.64-.41.87-.28s.01.52-.09.7c-5.2,9.03-10.41,18.05-15.63,27.07-.1.18-.39.58-.58.47s-.19-.6-.2-.88Z"
          />
        </g>
        <g>
          <path
            className="cn-secondary"
            d="M17.76,18.49c-3.06,1.68-12.51,7.14-14.25,8.12-1.04.58-1.54,1.34-1.51,2.62.08,5.44.11,10.9.14,16.34,0,.13-.04.76.19.89s.45-.25.56-.43C8.11,36.99,13.32,27.97,18.52,18.95c.1-.18.31-.63.12-.74s-.61.13-.86.27Z"
          />
          <path
            className="cn-primary"
            d="M22.17,21.05c.08,3.49.07,14.4.1,16.4.02,1.19-.39,2-1.51,2.62-4.75,2.65-9.49,5.35-14.22,8.05-.11.07-.64.41-.87.28s-.01-.52.09-.7C10.96,38.67,16.17,29.65,21.37,20.62c.1-.18.39-.58.58-.47s.19.6.2.88Z"
          />
        </g>
        <g>
          <path
            className="cn-secondary"
            d="M17.76,88.16c-3.06-1.68-12.51-7.14-14.25-8.12-1.04-.58-1.54-1.34-1.51-2.62.08-5.44.11-10.9.14-16.34,0-.13-.04-.76.19-.89s.45.25.56.43c5.22,9.02,10.43,18.04,15.63,27.07.1.18.31.63.12.74s-.61-.13-.86-.27Z"
          />
          <path
            className="cn-primary"
            d="M22.17,85.6c.08-3.49.07-14.4.1-16.4.02-1.19-.39-2-1.51-2.62-4.75-2.65-9.49-5.35-14.22-8.05-.11-.07-.64-.41-.87-.28s-.01.52.09.7c5.2,9.03,10.41,18.05,15.63,27.07.1.18.39.58.58.47s.19-.6.2-.88Z"
          />
        </g>
      </g>
    </svg>
  ),
  CreateNowIcon: ({ width = '93', height = '107', className, ...props }: { width?: string; height?: string; className?: string; [key: string]: any }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 93.41 106.65"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <style>
          {`.cni-primary { fill: var(--color-primary-500, #116d8d); }
          .cni-secondary { fill: var(--color-secondary-500, #7ac9a7); }
          .cni-tertiary { fill: var(--color-tertiary-500, #00a8b8); }`}
        </style>
      </defs>
      <g>
        <path className="cni-tertiary" d="M8.02,50.82c2.98-1.81,12.44-7.27,14.16-8.29,1.02-.61,1.93-.66,3.03,0,4.67,2.79,9.38,5.55,14.08,8.29.11.06.68.34.68.61s-.44.27-.65.27c-10.42,0-20.84,0-31.26,0-.21,0-.7-.04-.7-.27s.42-.46.66-.61Z" />
        <path className="cni-tertiary" d="M8.02,55.91c2.98,1.81,12.44,7.27,14.16,8.29,1.02.61,1.93.66,3.03,0,4.67-2.79,9.38-5.55,14.08-8.29.11-.06.68-.34.68-.61s-.44-.27-.65-.27c-10.42,0-20.84,0-31.26,0-.21,0-.7.04-.7.27s.42.46.66.61Z" />
        <path className="cni-tertiary" d="M29.42,18.93c3.06,1.68,12.51,7.14,14.25,8.12,1.04.58,1.54,1.34,1.51,2.62-.08,5.44-.11,10.9-.13,16.34,0,.13.04.76-.19.89s-.45-.25-.56-.43c-5.22-9.02-10.43-18.04-15.63-27.07-.1-.18-.31-.63-.12-.74s.61.13.86.27Z" />
        <path className="cni-tertiary" d="M25.01,21.48c-.08,3.49-.07,14.4-.1,16.4-.02,1.19.39,2,1.51,2.62,4.75,2.65,9.49,5.35,14.22,8.05.11.07.64.41.87.28s.01-.52-.09-.7c-5.2-9.03-10.41-18.05-15.63-27.07-.1-.18-.39-.58-.58-.47s-.19.6-.2.88Z" />
        <path className="cni-tertiary" d="M29.42,87.72c3.06-1.68,12.51-7.14,14.25-8.12,1.04-.58,1.54-1.34,1.51-2.62-.08-5.44-.11-10.9-.13-16.34,0-.13.04-.76-.19-.89s-.45.25-.56.43c-5.22,9.02-10.43,18.04-15.63,27.07-.1.18-.31.63-.12.74s.61-.13.86-.27Z" />
        <path className="cni-tertiary" d="M25.01,85.18c-.08-3.49-.07-14.4-.1-16.4-.02-1.19.39-2,1.51-2.62,4.75-2.65,9.49-5.35,14.22-8.05.11-.07.64-.41.87-.28s.01.52-.09.7c-5.2,9.03-10.41,18.05-15.63,27.07-.1.18-.39.58-.58.47s-.19-.6-.2-.88Z" />
        <path className="cni-tertiary" d="M85.39,50.82c-2.98-1.81-12.44-7.27-14.16-8.29-1.02-.61-1.93-.66-3.03,0-4.67,2.79-9.38,5.55-14.08,8.29-.11.06-.68.34-.68.61s.44.27.65.27c10.42,0,20.84,0,31.26,0,.21,0,.7-.04.7-.27s-.42-.46-.66-.61Z" />
        <path className="cni-tertiary" d="M85.39,55.91c-2.98,1.81-12.44,7.27-14.16,8.29-1.02.61-1.93.66-3.03,0-4.67-2.79-9.38-5.55-14.08-8.29-.11-.06-.68-.34-.68-.61s.44-.27.65-.27c10.42,0,20.84,0,31.26,0,.21,0,.7.04.7.27s-.42.46-.66.61Z" />
        <path className="cni-tertiary" d="M64,18.93c-3.06,1.68-12.51,7.14-14.25,8.12-1.04.58-1.54,1.34-1.51,2.62.08,5.44.11,10.9.13,16.34,0,.13-.04.76.19.89s.45-.25.56-.43c5.22-9.02,10.43-18.04,15.63-27.07.1-.18.31-.63.12-.74s-.61.13-.86.27Z" />
        <path className="cni-tertiary" d="M68.41,21.48c.08,3.49.07,14.4.1,16.4.02,1.19-.39,2-1.51,2.62-4.75,2.65-9.49,5.35-14.22,8.05-.11.07-.64.41-.87.28s-.01.52.09-.7c5.2-9.03,10.41-18.05,15.63-27.07.1-.18.39-.58.58-.47s.19.6.2.88Z" />
        <path className="cni-tertiary" d="M64,87.72c-3.06-1.68-12.51-7.14-14.25-8.12-1.04-.58-1.54-1.34-1.51-2.62.08-5.44.11-10.9.13-16.34,0-.13-.04-.76.19-.89s.45.25.56.43c5.22,9.02,10.43,18.04,15.63,27.07.1.18.31.63.12.74s-.61-.13-.86-.27Z" />
        <path className="cni-tertiary" d="M68.41,85.18c.08-3.49.07-14.4.1-16.4.02-1.19-.39-2-1.51-2.62-4.75-2.65-9.49-5.35-14.22-8.05-.11-.07-.64-.41-.87-.28s-.01.52.09.7c5.2,9.03,10.41,18.05,15.63,27.07.1.18.39.58.58.47s.19-.6.2-.88Z" />
        <path className="cni-secondary" d="M30.94,10.91c2.98-1.81,12.44-7.27,14.16-8.29,1.02-.61,1.93-.66,3.03,0,4.67,2.79,9.38,5.55,14.08,8.29.11.06.68.34.68.61s-.44.27-.65.27c-10.42,0-20.84,0-31.26,0-.21,0-.7-.04-.7-.27s.42-.46.66-.61Z" />
        <path className="cni-primary" d="M30.94,16.01c2.98,1.81,12.44,7.27,14.16,8.29,1.02.61,1.93.66,3.03,0,4.67-2.79,9.38-5.55,14.08-8.29.11-.06.68-.34.68-.61s-.44-.27-.65-.27c-10.42,0-20.84,0-31.26,0-.21,0-.7.04-.7.27s.42.46.66.61Z" />
        <path className="cni-secondary" d="M30.94,96.09c2.98,1.81,12.44,7.27,14.16,8.29,1.02.61,1.93.66,3.03,0,4.67-2.79,9.38-5.55,14.08-8.29.11-.06.68-.34.68-.61s-.44-.27-.65-.27c-10.42,0-20.84,0-31.26,0-.21,0-.7.04-.7.27s.42.46.66.61Z" />
        <path className="cni-primary" d="M30.94,90.99c2.98-1.81,12.44-7.27,14.16-8.29,1.02-.61,1.93-.66,3.03,0,4.67,2.79,9.38,5.55,14.08,8.29.11-.06.68-.34.68-.61s-.44.27-.65.27c-10.42,0-20.84,0-31.26,0-.21,0-.7-.04-.7-.27s.42-.46.66-.61Z" />
        <path className="cni-secondary" d="M75.65,18.49c3.06,1.68,12.51,7.14,14.25,8.12,1.04.58,1.54,1.34,1.51,2.62-.08,5.44-.11,10.9-.14,16.34,0,.13.04.76-.19.89s-.45-.25-.56-.43c-5.22-9.02-10.43-18.04-15.63-27.07-.1-.18-.31-.63-.12-.74s.61.13.86.27Z" />
        <path className="cni-primary" d="M71.24,21.05c-.08,3.49-.07,14.4-.1,16.4-.02,1.19.39,2,1.51,2.62,4.75,2.65,9.49,5.35,14.22,8.05.11.07.64.41.87.28s.01-.52-.09-.7c-5.2-9.03-10.41-18.05-15.63-27.07-.1-.18-.39-.58-.58-.47s-.19.6-.2.88Z" />
        <path className="cni-secondary" d="M75.65,88.16c3.06-1.68,12.51-7.14,14.25-8.12,1.04-.58,1.54-1.34,1.51-2.62-.08-5.44-.11-10.9-.14-16.34,0-.13.04-.76-.19-.89s-.45.25-.56.43c-5.22,9.02-10.43,18.04-15.63,27.07-.1.18-.31.63-.12.74s.61-.13.86-.27Z" />
        <path className="cni-primary" d="M71.24,85.6c-.08-3.49-.07-14.4-.1-16.4-.02-1.19.39-2,1.51-2.62,4.75-2.65,9.49-5.35,14.22-8.05.11-.07.64-.41.87-.28s.01.52-.09.7c-5.2,9.03-10.41,18.05-15.63,27.07-.1.18-.39.58-.58.47s-.19-.6-.2-.88Z" />
        <path className="cni-secondary" d="M17.76,18.49c-3.06,1.68-12.51,7.14-14.25,8.12-1.04.58-1.54,1.34-1.51,2.62.08,5.44.11,10.9.14,16.34,0,.13-.04.76.19.89s.45-.25.56-.43C8.11,36.99,13.32,27.97,18.52,18.95c.1-.18.31-.63.12-.74s-.61.13-.86.27Z" />
        <path className="cni-primary" d="M22.17,21.05c.08,3.49.07,14.4.1,16.4.02,1.19-.39,2-1.51,2.62-4.75,2.65-9.49,5.35-14.22,8.05-.11.07-.64.41-.87.28s-.01-.52.09-.7C10.96,38.67,16.17,29.65,21.37,20.62c.1-.18.39-.58.58-.47s.19.6.2.88Z" />
        <path className="cni-secondary" d="M17.76,88.16c-3.06-1.68-12.51-7.14-14.25-8.12-1.04-.58-1.54-1.34-1.51-2.62.08-5.44.11-10.9.14-16.34,0-.13-.04-.76.19-.89s.45.25.56.43c5.22,9.02,10.43,18.04,15.63,27.07.1.18.31.63.12.74s-.61-.13-.86-.27Z" />
        <path className="cni-primary" d="M22.17,85.6c.08-3.49.07-14.4.1-16.4.02-1.19-.39-2-1.51-2.62-4.75-2.65-9.49-5.35-14.22-8.05-.11-.07-.64-.41-.87-.28s-.01.52.09.7c5.2,9.03,10.41,18.05,15.63,27.07.1.18.39.58.58.47s.19-.6.2-.88Z" />
      </g>
    </svg>
  ),
  RightArrow: ({
    color = 'currentColor',
    width = '25',
    height = '25',
    ...props
  }) => (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 6 11"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1.26953L5.5 5.76953L1 10.2695"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Home: ({
    color = 'currentColor',
    width = '22',
    height = '22',
    ...props
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  ),
  Data: ({
    color = 'currentColor',
    width = '22',
    height = '22',
    ...props
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  ),
  Dashboard: ({
    width = '25',
    height = '25',
    ...props
  }) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="7.12939" width="6.5625" height="6.29059" rx="1" fill="#5E5E5E" />
      <rect
        x="7.4375"
        y="7.12939"
        width="6.5625"
        height="6.29059"
        rx="1"
        fill="#5E5E5E"
      />
      <rect x="7.4375" width="6.5625" height="6.29059" rx="1" fill="#47C0AE" />
    </svg>
  ),
  CaretSort: ChevronsUpDown,
  UpArrow: sized(ArrowUp),
  DownArrow: sized(ArrowDown),
  Close: sized(X),
  PlusCircled: PlusCircle,
  Table: Table2,
  Calendar: LucideCalendar,
  // Cloud storage brand icons
  Dropbox: ({ width = '16', height = '16', className, ...props }: { width?: string; height?: string; className?: string; [key: string]: any }) => (
    <svg width={width} height={height} viewBox="0 0 256 218" fill="none" className={className} {...props}>
      <path d="M63.995 0L0 40.771l63.995 40.772L128 40.771z" fill="#0061FF"/>
      <path d="M0 122.321l63.995 40.771L128 122.321 63.995 81.543z" fill="#0061FF"/>
      <path d="M128 122.321l64.005 40.771L256 122.321l-63.995-40.778z" fill="#0061FF"/>
      <path d="M256 40.771L192.005 0 128 40.771l64.005 40.772z" fill="#0061FF"/>
      <path d="M128.01 132.174l-64.006 40.779-27.99-17.946v20.09l91.996 55.122 91.996-55.122v-20.09l-27.99 17.946z" fill="#0061FF"/>
    </svg>
  ),
  GoogleDrive: ({ width = '16', height = '16', className, ...props }: { width?: string; height?: string; className?: string; [key: string]: any }) => (
    <svg width={width} height={height} viewBox="0 0 87.3 78" fill="none" className={className} {...props}>
      <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3L29 52.2H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066DA"/>
      <path d="M43.65 25.15L29 1.2C27.65 2 26.5 3.1 25.7 4.5L1.2 46.5c-.8 1.4-1.2 2.95-1.2 4.5h29z" fill="#00AC47"/>
      <path d="M58.3 52.2l-14.65 25.5c1.4.8 2.95 1.2 4.55 1.2h35.8c1.55 0 3.1-.45 4.5-1.2z" fill="#EA4335"/>
      <path d="M43.65 25.15L58.3 1.2C56.95.4 55.4 0 53.8 0H33.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832D"/>
      <path d="M58.3 52.2H29l-15.25 26.5c1.4.8 2.95 1.2 4.55 1.2h50.5c1.6 0 3.15-.45 4.5-1.2z" fill="#2684FC"/>
      <path d="M82.35 25.35L68.6 4.5c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25.15 58.3 52.2h29c0-1.55-.4-3.1-1.2-4.5z" fill="#FFBA00"/>
    </svg>
  ),
  // Sidebar open icon - hamburger menu with content lines
  SidebarOpen: ({
    color = 'currentColor',
    width = '24',
    height = '24',
    ...props
  }: { color?: string; width?: string; height?: string; [key: string]: any }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer frame */}
      <path
        d="M103 107V112H9V107H103ZM107 103V9C107 6.79086 105.209 5 103 5H9C6.79086 5 5 6.79086 5 9V103C5 105.209 6.79086 107 9 107V112L8.53711 111.988C3.78166 111.747 0 107.815 0 103V9C0 4.18468 3.78166 0.252643 8.53711 0.0117188L9 0H103C107.971 0 112 4.02944 112 9V103C112 107.971 107.971 112 103 112V107C105.209 107 107 105.209 107 103Z"
        fill={color}
      />
      {/* Sidebar divider line */}
      <path d="M31 112H26L26 0L31 0L31 112Z" fill={color} />
      {/* Content lines (hamburger) */}
      <path
        d="M94 55C96.2091 55 98 56.7909 98 59C98 61.2091 96.2091 63 94 63H42C39.7909 63 38 61.2091 38 59C38 56.7909 39.7909 55 42 55H94ZM94 36.5C96.2091 36.5 98 38.2909 98 40.5C98 42.7091 96.2091 44.5 94 44.5H42C39.7909 44.5 38 42.7091 38 40.5C38 38.2909 39.7909 36.5 42 36.5H94ZM94 18C96.2091 18 98 19.7909 98 22C98 24.2091 96.2091 26 94 26H42C39.7909 26 38 24.2091 38 22C38 19.7909 39.7909 18 42 18H94Z"
        fill={color}
      />
    </svg>
  ),
  // Sidebar close icon - X close button with sidebar
  SidebarClose: ({
    color = 'currentColor',
    width = '24',
    height = '24',
    ...props
  }: { color?: string; width?: string; height?: string; [key: string]: any }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 112 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer frame */}
      <path
        d="M9 107V112H103V107H9ZM5 103V9C5 6.79086 6.79086 5 9 5H103C105.209 5 107 6.79086 107 9V103C107 105.209 105.209 107 103 107V112L103.463 111.988C108.218 111.747 112 107.815 112 103V9C112 4.18468 108.218 0.252643 103.463 0.0117188L103 0H9C4.02944 0 0 4.02944 0 9V103C0 107.971 4.02944 112 9 112V107C6.79086 107 5 105.209 5 103Z"
        fill={color}
      />
      {/* Sidebar divider line */}
      <path d="M81 112H86V0L81 0V112Z" fill={color} />
      {/* X close icon */}
      <path
        d="M59.1718 34.1718C60.7339 32.6097 63.266 32.6097 64.8281 34.1718C66.3902 35.7339 66.3902 38.266 64.8281 39.8281L48.6562 55.999L64.8281 72.1708C66.3902 73.7329 66.3902 76.266 64.8281 77.8281C63.266 79.3902 60.7329 79.3902 59.1708 77.8281L42.999 61.6562L26.8281 77.8281C25.266 79.3902 22.7339 79.3902 21.1718 77.8281C19.6097 76.266 19.6097 73.7339 21.1718 72.1718L37.3437 55.9999L21.1718 39.8281C19.6097 38.266 19.6097 35.7339 21.1718 34.1718C22.7339 32.6097 25.266 32.6097 26.8281 34.1718L42.9999 50.3437L59.1718 34.1718Z"
        fill={color}
      />
    </svg>
  ),
};
