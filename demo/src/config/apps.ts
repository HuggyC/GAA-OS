import type { App } from '@prozilla-os/core';
import { 
  BrainCircuit, 
  Image, 
  Video, 
  Music,
  Settings,
  Users
} from 'lucide-react';

export const academyApps: App[] = [
  {
    id: 'llm-course',
    name: 'LLM & Texte',
    icon: BrainCircuit,
    description: 'Maîtrisez les modèles de langage',
    window: {
      defaultSize: { width: 800, height: 600 },
      minSize: { width: 400, height: 300 }
    }
  },
  {
    id: 'image-course',
    name: 'Image',
    icon: Image,
    description: 'Créez des visuels époustouflants',
    window: {
      defaultSize: { width: 800, height: 600 },
      minSize: { width: 400, height: 300 }
    }
  },
  {
    id: 'video-course',
    name: 'Video & Audio',
    icon: Video,
    description: 'Explorez la création multimédia',
    window: {
      defaultSize: { width: 800, height: 600 },
      minSize: { width: 400, height: 300 }
    }
  },
  {
    id: 'music-course',
    name: 'Musique',
    icon: Music,
    description: 'Découvrez la composition par IA',
    window: {
      defaultSize: { width: 800, height: 600 },
      minSize: { width: 400, height: 300 }
    }
  },
  {
    id: 'community',
    name: 'Communauté',
    icon: Users,
    description: 'Rejoignez notre espace communautaire',
    window: {
      defaultSize: { width: 1000, height: 700 },
      minSize: { width: 500, height: 400 }
    }
  },
  {
    id: 'settings',
    name: 'Paramètres',
    icon: Settings,
    description: 'Configurez votre environnement',
    window: {
      defaultSize: { width: 600, height: 500 },
      minSize: { width: 400, height: 300 }
    }
  }
];