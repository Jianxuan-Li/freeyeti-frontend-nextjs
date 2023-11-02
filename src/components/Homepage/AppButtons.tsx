'use client';
import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

const StyledLink = styled.button`
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  color: #161e2e;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e5e7eb;
    border-color: #e5e7eb;
    color: #161e2e;
  }
`;

export const LinkButton = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

const AppBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

type Props = {};

export default function AppButtons({}: Props) {
  const router = useRouter();

  return (
    <AppBtnContainer>
      <LinkButton onClick={() => router.push('/watch')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
          />
        </svg>
        YetiBe
      </LinkButton>
      <LinkButton onClick={() => router.push('/chat')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
          />
        </svg>
        YeChat
      </LinkButton>
    </AppBtnContainer>
  );
}
