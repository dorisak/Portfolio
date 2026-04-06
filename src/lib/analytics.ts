/**
 * Google Analytics 4 Tracking Service
 * Provides type-safe functions to track user interactions
 */

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track page views
 * @param pageName - Name of the page being viewed
 */
export const trackPageView = (pageName: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
};

/**
 * Track project views (Pilulu or MedVocal)
 * @param projectName - Name of the project (e.g., 'Pilulu', 'MedVocal')
 */
export const trackProjectView = (projectName: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'view_project', {
      project_name: projectName,
      event_category: 'engagement',
      event_label: `Project View: ${projectName}`,
    });
  }
};

/**
 * Track media switches (video or image toggles)
 * @param projectId - ID of the project (e.g., 'pilulu', 'medvocal')
 * @param switchType - Type of media ('video' or 'image')
 * @param value - The new value after switch (e.g., 'patient', 'aidant', 'dashboard', 'consultation')
 */
export const trackMediaSwitch = (
  projectId: string,
  switchType: 'video' | 'image',
  value: string
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', `${switchType}_switch`, {
      project_id: projectId,
      switch_value: value,
      event_category: 'engagement',
      event_label: `${projectId} - ${switchType} - ${value}`,
    });
  }
};

/**
 * Track social media link clicks
 * @param platform - Social media platform (e.g., 'LinkedIn', 'Twitter')
 */
export const trackSocialClick = (platform: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'social_click', {
      platform: platform,
      event_category: 'social',
      event_label: `Social Click: ${platform}`,
    });
  }
};
