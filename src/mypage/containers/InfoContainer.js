'use client';
import React, { useEffect, useState, useCallback } from 'react';
import ProfileForm from '../components/ProfileForm';

const InfoContainer = () => {
  return <ProfileForm onSubmit={onSubmit} />;
};

export default React.memo(InfoContainer);
