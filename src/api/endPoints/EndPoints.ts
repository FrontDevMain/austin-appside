// src/api/endpoints.ts
export const ENDPOINTS = {
  LOGIN: "/api/v1/auth/login",
  REGISTER: "/api/v1/auth/register",
  FORGOT_PASSWORD: "api/v1/auth/update-password",
  UPDATE_PASSWORD: "api/v1/auth/update-password",

  CONTACT_US: "/api/v1/auth/contact-us",
  EVENT_BOOKING: "/api/v1/booking/create",
  KIDS_CLASSES: {
    STEP_1: "/api/v1/kids-class/service-selection",
    STEP_2: (slotId: string) =>
      `/api/v1/kids-class/slot-availability/${slotId}`,
    STEP_3: (id: string) => `/api/v1/kids-class/personal-info/${id}`,
    STEP_4: (id: string) => `/api/v1/kids-class/family-details/${id}`,
  },
  DONATE: "/api/v1/donate",
  // Add more endpoints here
} as const;

export type EndpointKeys = keyof typeof ENDPOINTS;
