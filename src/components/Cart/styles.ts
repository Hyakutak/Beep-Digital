import { styled } from "@/styles";
import * as Dialog from '@radix-ui/react-dialog';

export const DialogContent = styled(Dialog.Content, {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100vh',
    width: '30rem',
    background: '$gray1',
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
})