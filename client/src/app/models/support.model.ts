export interface Message {
  sender: 'user' | 'admin';
  message: string;
  timestamp: Date;
  ticketId?: string;
}

export interface SendMessageData {
  recipient: string;
  message: string;
  ticketId?: string;
}

export interface EncryptedMessageNotification {
  messageId: string;
  senderName: string;
  senderEmail: string;
  timestamp: Date;
}

export interface MessageNotification {
  ticketId: string;
  message: string;
  userId?: string;
  sender?: 'user' | 'admin';
}

export interface StatusNotification {
  ticketId: string;
  status: string;
  message: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface UserTicket {
  _id: string;
  user: string | User;
  issue: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  messages: Message[];
  // Keep userId for backward compatibility
  userId?: User | string;
}
