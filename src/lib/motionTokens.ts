/**
 * Shared Motion Tokens
 * Centralized source of truth for easings, durations, and spring physics.
 * Formulated against Emil Kowalski's animation & performance standards.
 */

export const EASING_SNAPPY = [0.16, 1, 0.3, 1] as const;
export const EASING_SMOOTH = [0.23, 1, 0.32, 1] as const;
export const EASING_OVERSHOOT = [0.34, 1.56, 0.64, 1] as const;

export const DURATION_FAST = 0.2;
export const DURATION_STANDARD = 0.35;
export const DURATION_CARD = 0.5;
export const DURATION_SECTION = 0.6;

export const TRANSITION_SNAPPY = {
  duration: DURATION_CARD,
  ease: EASING_SNAPPY,
};

export const TRANSITION_SMOOTH = {
  duration: DURATION_STANDARD,
  ease: EASING_SMOOTH,
};

export const SPRING_GENTLE = {
  type: "spring" as const,
  stiffness: 300,
  damping: 22,
};

export const SPRING_POP = {
  type: "spring" as const,
  stiffness: 400,
  damping: 22,
};

export const SPRING_BOUNCE = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
};
