// src/api/endpoints.ts
export const ENDPOINTS = {
  LOGIN: "/api/v1/auth/login",
  REGISTER: "/api/v1/auth/register",
  FORGOT_PASSWORD: "api/v1/auth/forgot-password",
  VERIFY_OTP: (id: string) => `api/v1/auth/verify-otp/${id}`,
  UPDATE_PASSWORD: "api/v1/auth/update-password",

  CONTACT_US: "/api/v1/auth/contact-us",
  EVENT_BOOKING: "/api/v1/booking/create",
  ATTEND_BOOKING: (id: string) => `/api/v1/booking/attend-event/${id}`,
  GET_BOOKINGS: (page: number, perPage: number, flag: string) =>
    `api/v1/booking?page=${page}&perPage=${perPage}&flag=${flag}`,
  KIDS_CLASSES: {
    STEP_1: "/api/v1/kids-class/service-selection",
    STEP_2: (id: string) => `/api/v1/kids-class/slot-availability/${id}`,
    STEP_3: (id: string) => `/api/v1/kids-class/personal-info/${id}`,
    STEP_4: (id: string) => `/api/v1/kids-class/family-details/${id}`,
  },
  DONATE: "/api/v1/donate",
  // Add more endpoints here
} as const;

export type EndpointKeys = keyof typeof ENDPOINTS;
