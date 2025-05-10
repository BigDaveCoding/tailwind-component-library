import {Button} from "@/components/Button";
import {ButtonGroupProps} from "@/components/ButtonGroup/ButtonGroup.types";


export default function ButtonGroup({
    leftButtonText = 'Prev',
    rightButtonText = 'Next',}: ButtonGroupProps)
{

    return (
        <>
            <div>
                <Button variant={"groupPrev"}>{leftButtonText}</Button>
                <Button variant={"groupNext"}>{rightButtonText}</Button>
            </div>
        </>
    )
}