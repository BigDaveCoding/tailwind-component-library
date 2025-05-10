import {Button} from "@/components/Button";
import {ButtonGroupProps} from "@/components/ButtonGroup/ButtonGroup.types";


export default function ButtonGroup({
    leftButtonText = 'Prev',
    rightButtonText = 'Next',
    onLeftClick,
    onRightClick}: ButtonGroupProps)
{

    return (
        <>
            <div>
                <Button variant={"groupPrev"} onClick={() => onLeftClick}>{leftButtonText}</Button>
                <Button variant={"groupNext"} onClick={() => onRightClick}>{rightButtonText}</Button>
            </div>
        </>
    )
}