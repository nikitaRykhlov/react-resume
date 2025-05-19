import React, {useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface CopyToClipboardProps {
    content: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({content}) => {
    const [open, setOpen] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setOpen(true);
        } catch (err) {
            console.error('failed to copy text:', err);
        }
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    return (
        <>
            <IconButton
                onClick={handleCopy}
                color="inherit"
                sx={{color: "white"}}
            ><ContentCopyIcon/></IconButton>

            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Successfully copied"
                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small"/>
                    </IconButton>
                }
            />
        </>
    );
};

export default CopyToClipboard;