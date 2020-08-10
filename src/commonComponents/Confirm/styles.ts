import styled from 'styled-components';
import Modal from '../Modal';
import Button, { PrimaryButton } from '../Button';

export const ConfirmModal = styled(Modal)`
  max-width: 360px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DefaultOkButton = PrimaryButton;
export const DefaultCancelButton = styled(Button)`
  margin-right: 10px;
`;
