import * as Dialog from '@radix-ui/react-dialog';
import { DialogContent } from './styles';
import { X, Handbag } from 'phosphor-react';


export function Cart() {
    return (
        <Dialog.Root>
            <Dialog.Trigger>                
                <Handbag size={24} />
            </Dialog.Trigger>
            <Dialog.Portal>
                <DialogContent>
                    <Dialog.Close>
                        <X size={32} />
                    </Dialog.Close>
                    <Dialog.Title>
                        Sacola de Compras
                    </Dialog.Title>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    );
  
}
