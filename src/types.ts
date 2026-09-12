export interface ReasonItem {
  id: string;
  title: string;
  description: string;
  category: 'sorriso' | 'abraço' | 'cumplicidade' | 'futuro' | 'cuidado' | 'magia';
  icon: string;
}

export interface TimelineEvent {
  id: string;
  dateStr: string;
  title: string;
  description: string;
  tag: string;
}

export interface LoveDeclarationData {
  senderName: string;
  receiverName: string;
  startDate: string; // YYYY-MM-DD
  headline: string;
  subheadline: string;
  letterTitle: string;
  letterGreeting: string;
  letterBody: string[];
  letterClosing: string;
  letterSignature: string;
  songDedication: {
    title: string;
    artist: string;
    message: string;
  };
  proposalQuestion: string;
  proposalSubtext: string;
  reasons: ReasonItem[];
  timeline: TimelineEvent[];
}
