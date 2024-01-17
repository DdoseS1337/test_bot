import { AbstractDocument } from "../../database/abstract.schema";

export interface UserDocument extends AbstractDocument {
  client_id: string;
  wallet_address: string;
  created_at: Date;
  updated_at: Date;
}
