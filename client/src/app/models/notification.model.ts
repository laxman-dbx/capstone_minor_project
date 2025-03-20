export interface Notification {
  _id: string;
  userId: string;
  title: string;
  type: 'message_encrypted' | 'message_decrypted' | 'support_response';
  isRead: boolean;
  metadata: {
    messageId?: string;
    ticketId?: string;
  };
  createdAt: Date;
}
