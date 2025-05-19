import MuiChip from "@mui/material/Chip"
import "../../assets/styles/Chip.scss"

export interface ChipProps {
    label: string;
    variant?: "white" | "black"
}

const Chip = ({label, variant}: ChipProps) => {
    let calculatedVariant = "white"

    if (variant) {
        calculatedVariant = variant
    }

    const className = `chip ${calculatedVariant}`

    return (
        <MuiChip className={className} label={label} />
    )
}

export default Chip