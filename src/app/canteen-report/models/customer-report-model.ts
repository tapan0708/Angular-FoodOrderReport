export interface MonthsOrder {
  month: number;
}

export interface User {
  user: UserDetails;
  reports: Reports[];
}

export interface UserDetails {
  cm_firebase_token: string;
  created_at: Date;
  department_id: number;
  device_id: string;
  email: string;
  email_verification_token: string;
  email_verified_at: string;
  emp_id: string;
  f_name: string;
  id: number;
  image: string;
  is_breakfast: number;
  is_dinner: number;
  is_invalid_device: number;
  is_lunch: number;
  is_phone_verified: number;
  is_sat_opted: number;
  is_veg: number;
  l_name: '';
  order_count: number;
  phone: string;
  status: number;
  updated_at: Date;
}

export interface Reports {
  date: Date;
  opt_ins: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
}
