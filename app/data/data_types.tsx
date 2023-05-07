// * types and interfaces defining our data models in UI_data.tsx
// each interface or type in plural such as banks can be a table in database if code-first approach is taken or use an ORM like prisma!

type img_url = string;
type workRequestStatus = "pending" | "success" | "failed";
type paymentStatus = "pending" | "completed" | "failed";
type paymentMode = "online" | "cash" | "cheque" | "card";

export interface $Bank {
  id: string; // uuid
  bank_name: string;
  slogan: string;
  description: string;
}

export interface $Bailiff {
  id: string; // uuid
  bailiff_name: string;
  system_rating: number;
  // more info like credentials
}

export interface $BankBailiffJoin {
  id: string;
  bankId: string; // references $Bank.id
  bailiffId: string; // references $Bailiff.id
}

export interface $BailiffBankJoin {
  id: string;
  bailiffId: string; // references $Bailiff.id
  bankId: string; // references $Bank.id
}

export interface $Client {
  id: string; // uuid
  client_name: string;
  contact: number;
  location: string;
  outstanding_amount: number;
  current_outstanding: number;
}

export interface $BankClientJoin {
  id: string;
  bankId: string; // references $Bank.id
  clientId: string; // references $Client.id
}

export interface $BailiffClientJoin {
  id: string;
  bailiffId: string; // references $Bailiff.id
  clientId: string; // references $Client.id
  date_added: Date;
}

export interface $BailiffOfficer {
  id: string; // uuid
  for_bailiff: string; // references $Bailiff.id
  officer_name: string;
  clients_assigned: number;
  total_amount_to_collect: number;
  total_amount_collected: number;
  recovery_rate: number;
  system_rating: number;
  // more info
}

export interface $BailiffReport {
  id: string;
  for_client: string; // references $Client.id
  toBank: string; // references $Bank.id
  byBailiff: string; // references $Bailiff.id
  date_issued: Date;
  report_message: string;
  client_engaged: boolean; // true or false
  engagement_date: Date;
  client_paid: boolean; // true or false
  client_paid_amount: number; // 0 if client_paid or client_engaged is false
  report_week: string; // week 2 for example
  payment_references: string; // references $Payment.id
}

export interface $ReportReactions {
  id: string;
  by_bank: string; // references $Bank.id
  to_bailiff: string; // references $Bailiff.id
  for_report: string; // references $BailiffReport.id
  reaction_message: string;
  reaction_date: Date;
}

export interface $ClientPayment {
  id: string; // uuid
  amount_paid: number;
  date_paid: Date;
  payment_status: paymentStatus; // eg. success
  payment_mode: paymentMode; // eg. cash
  payment_proof: img_url;
  by_client: string; // references $Client.id
  to_officer: string; // references $BailiffOfficer.id
  to_bailiff: string; // references $Bailiff.id
  to_bank: string; // references $Bank.id
}

export interface $bailiffWorkRequest {
  id: string;
  status: workRequestStatus; // eg. failed
  to_bank: string; // references $Bank.id
  by_bailiff: string; // references $Bailiff.id
  submitted_date: Date;
}

export interface $BailiffPendingTasks {
  id: string;
  by_bank: string; // references $Bank.id
  to_bailiff: string; // references $Bailiff.id
  task_client: string; // references $Client.id
  date_sent: Date;
  due_date: Date;
}

// others to include will be Officer Reports, Bank Metrics, Bailiff Metrics and more join tables or interfaces
