import {
  createProfile,
  getProfileByUserId,
  updateProfile,
} from "../models/profile.model.js";

import { validateProfileData } from "../validators/profile.validator.js";

import AppError from "../utils/AppError.js";

export const createUserProfile =
  async (
    userId,
    profileData
  ) => {
    validateProfileData(
      profileData
    );

    const existingProfile =
      await getProfileByUserId(
        userId
      );

    if (existingProfile) {
      throw new AppError(
        "Profile already exists",
        409
      );
    }

    const profile =
      await createProfile({
        userId,
        ...profileData,
      });

    return profile;
  };

export const getUserProfile =
  async (userId) => {
    const profile =
      await getProfileByUserId(
        userId
      );

    if (!profile) {
      throw new AppError(
        "Profile not found",
        404
      );
    }

    return profile;
  };

export const updateUserProfile =
  async (
    userId,
    profileData
  ) => {
    validateProfileData(
      profileData
    );

    const existingProfile =
      await getProfileByUserId(
        userId
      );

    if (!existingProfile) {
      throw new AppError(
        "Profile not found",
        404
      );
    }

    const updatedProfile =
      await updateProfile(
        userId,
        profileData
      );

    return updatedProfile;
  };