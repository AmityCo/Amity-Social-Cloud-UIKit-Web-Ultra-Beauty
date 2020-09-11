import styled, { css } from 'styled-components';

const commonButtonStyles = ({ theme }) => css`
  display: flex;
  align-items: center;
  border-radius: 4px;
  outline: none;
  padding: 10px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  ${theme.typography.bodyBold}
  &:disabled {
    cursor: auto;
  }
`;

export const DefaultButton = styled.button`
  ${commonButtonStyles}
  background-color: #fff;
  border: 1px solid #e3e4e8;
  color: #17181c;
  &:hover {
    color: ${({ theme }) => theme.color.neutral1};
  }
  &:disabled {
    color: ${({ theme }) => theme.color.neutral2};
  }
`;

export const PrimaryButton = styled.button`
  ${commonButtonStyles}
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  &:hover {
    background-color: #4a82f2;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.palette.primary.shade2};
  }
`;

export const SecondaryButton = styled.button`
  ${commonButtonStyles}
  color: ${({ theme }) => theme.color.neutral1};
  background-color: transparent;
  border: none;
  &:hover {
    background-color: #f2f2f4;
  }
  &:disabled {
    color: ${({ theme }) => theme.color.neutral2};
  }
  ${({ active, theme }) => active && `color: ${theme.palette.primary.shade1};`}
`;
