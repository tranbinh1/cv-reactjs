import labels from "../../config/label-data"
import '../../styles/label.css'

const Label = ({ labelType }) => {
    if (labelType == null) {
        return null;
    }

    const labelData = labels.find(label => label.labelType === labelType);

    if (labelData == null) {
        return null;
    }

    const styles = {
        color: labelData.textColor,
        backgroundColor: labelData.bgColor,
        "--background-color": labelData.bgColor,
    }
    
    return (
        <div style={styles} class="label">{labelData.text}</div>
    )
}

export default Label