export interface DocumentTypeCount {
  _id: string;
  count: number;
}

export interface DocumentAnalytics {
  total: number;
  byType: DocumentTypeCount[];
}

export interface DocumentAnalyticsResponse {
  documents: DocumentAnalytics;
}

export interface FullAnalyticsResponse {
  totalUsers: number;
  totalDocuments: number;
  maskedDocuments: number;
  sharedTexts: number;
  encryptedTexts: number;
  userGrowth: Array<{_id: {month: number, year: number}, count: number}>;
  documentUploads: Array<{_id: {month: number, year: number}, count: number}>;
  documentTypes: Array<{_id: string, count: number}>;
  dailyDocumentUploads: Array<{_id: {day: number, month: number, year: number}, count: number}>;
  userActivityByHour: Array<{_id: {hour: number}, count: number}>;
  maskedVsUnmaskedRatio: {masked: number, unmasked: number};
  topActiveUsers: Array<{_id: string, documentCount: number, user: {name: string, email: string}}>;
}

export interface User{
  email:string,
  name:string,
  _id:string
}

export interface Ticket {
  _id: string;
  user: string | User;
  issue: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  messages: any[];
  updatedAt: Date;
  userId?: User | string;
}

export interface ActivityLog {
  _id: string;
  userId: string | { name: string; email: string; _id: string };
  type: 'upload' | 'mask' | 'share' | 'delete' | 'encrypt' | 'decrypt' | 'download';
  text: string;
  documentId?: {
    _id: string;
    originalName: string;
    documentType: string;
  };
  textId?: any;
  metadata?: any;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityLogsResponse {
  activityLogs: ActivityLog[];
  pagination: {
    totalLogs: number;
    totalPages: number;
    currentPage: number;
    hasMore: boolean;
  };
}

export interface UsageMetrics {
  totalDocuments: number;
  documentsThisMonth: number;
  documentDate:number[];
  documentsProcessed: {
    adhaar: number;
    pan: number;
    driving_license: number;
    other: number;
  };
  savedVsDirectDownloads: {
    saved: number;
    directDownloads: number;
  };
  totalStorageUsed: number; // in bytes
}