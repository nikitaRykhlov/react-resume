import React, {useState} from 'react';
import {Button, Collapse, Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface ExpandableProps {
    children: React.ReactNode;
}

const Expandable = ({children}: ExpandableProps) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Box>
            <div>
                <Collapse orientation="vertical" in={expanded}>
                    {children}
                </Collapse>
            </div>

            <Button
                size="small"
                color="inherit"
                onClick={() => setExpanded(!expanded)}
                endIcon={<ExpandMoreIcon
                    sx={{transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s'}}/>}
            >
                {expanded ? 'Show less' : 'Show more'}
            </Button>
        </Box>
    );
};

export default Expandable;